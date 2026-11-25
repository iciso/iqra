/**
 * The scholar review sheet as an Excel workbook (exceljs). Shared by the download route
 * (app/api/review-sheet/route.ts) and the import in scripts/review-sheet.ts, so both read and
 * write the same columns. No Next or server-only imports: the tsx scripts load this file too.
 *
 * One row per field: question | option1..n | explanation (the explanation row only when English has one).
 */
import type { Workbook } from "exceljs"
import { isStale } from "../i18n/source-fingerprint"

// "status" is last so sheets made before it still import (the import finds columns by name and ignores status).
export const REVIEW_HEADER = ["category", "id", "field", "english", "translation", "correction", "reviewer_note", "status"] as const

/** Row status: translated and current / the English changed after it was translated / not translated. */
export const ROW_STATUS = { ok: "ok", stale: "english changed - retranslate", missing: "missing" } as const
export type RowStatus = (typeof ROW_STATUS)[keyof typeof ROW_STATUS]

const WIDTHS = [16, 22, 12, 55, 55, 55, 30, 28]
const HEADER_GREEN = "FF15803D"
const CORRECTION_YELLOW = "FFFEF9C3"
const STALE_ORANGE = "FFFED7AA"
const HIDDEN_TAB_RED = "FFB91C1C"
const TRANSLATION_COLUMN = REVIEW_HEADER.indexOf("translation") + 1
const CORRECTION_COLUMN = REVIEW_HEADER.indexOf("correction") + 1
const STATUS_INDEX = REVIEW_HEADER.indexOf("status")

/** src = fingerprint of the English the translation was made from (lib/i18n/source-fingerprint.ts). */
export type ReviewEntry = { question?: string; options?: string[]; explanation?: string; src?: string }
export type ReviewFile = { _meta?: { status?: string }; questions: Record<string, ReviewEntry> }

/** [field, text] for every field of one English question. */
export function fieldsOf(e: ReviewEntry): [string, string][] {
  const rows: [string, string][] = [["question", e.question ?? ""]]
  ;(e.options ?? []).forEach((o, i) => rows.push([`option${i + 1}`, o]))
  if (e.explanation) rows.push(["explanation", e.explanation])
  return rows
}

/** The translated text of one field, or "" when it is not translated yet. */
export function translationOf(e: ReviewEntry | undefined, field: string): string {
  if (!e) return ""
  if (field === "question") return e.question ?? ""
  if (field === "explanation") return e.explanation ?? ""
  return e.options?.[Number(field.slice(6)) - 1] ?? ""
}

/** Status of one field: stale when the question's English changed since translation, else missing when empty, else ok. */
export function rowStatus(en: ReviewEntry, tr: ReviewEntry | undefined, field: string): RowStatus {
  if (tr && isStale(tr.src, en)) return ROW_STATUS.stale
  return translationOf(tr, field).trim() === "" ? ROW_STATUS.missing : ROW_STATUS.ok
}

/** The sheet rows (without the header) for one category, in English question order. */
export function reviewRows(category: string, english: ReviewFile, translated: ReviewFile | null): string[][] {
  return Object.entries(english.questions).flatMap(([id, en]) => {
    const tr = translated?.questions[id]
    return fieldsOf(en).map(([field, text]) => [category, id, field, text, translationOf(tr, field), "", "", rowStatus(en, tr, field)])
  })
}

/**
 * One worksheet in the approved layout: green bold header, wrapped top-aligned cells, yellow correction column,
 * orange translation cell on rows whose English changed, frozen at D2, autofilter.
 */
export function addReviewSheet(workbook: Workbook, name: string, rows: string[][], hidden: boolean) {
  const sheet = workbook.addWorksheet(name, {
    views: [{ state: "frozen", xSplit: 3, ySplit: 1, topLeftCell: "D2" }],
    properties: hidden ? { tabColor: { argb: HIDDEN_TAB_RED } } : {},
  })
  sheet.columns = WIDTHS.map((width) => ({ width }))
  sheet.addRow([...REVIEW_HEADER])
  sheet.addRows(rows)

  sheet.eachRow((row, rowNumber) => {
    const stale = rowNumber > 1 && rows[rowNumber - 2]?.[STATUS_INDEX] === ROW_STATUS.stale
    row.eachCell({ includeEmpty: true }, (cell, col) => {
      cell.alignment = { wrapText: true, vertical: "top" }
      if (rowNumber === 1) {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } }
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: HEADER_GREEN } }
      } else if (col === CORRECTION_COLUMN) {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: CORRECTION_YELLOW } }
      } else if (col === TRANSLATION_COLUMN && stale) {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: STALE_ORANGE } }
      }
    })
  })
  sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: rows.length + 1, column: REVIEW_HEADER.length } }
}

/** Every worksheet as plain text rows (header first), for the import. Rich text and formulas become their shown text. */
export function sheetTables(workbook: Workbook): { name: string; rows: string[][] }[] {
  return workbook.worksheets.map((sheet) => {
    const rows: string[][] = []
    sheet.eachRow({ includeEmpty: false }, (row) => {
      const cells: string[] = []
      for (let c = 1; c <= Math.max(row.cellCount, REVIEW_HEADER.length); c++) cells.push(row.getCell(c).text ?? "")
      rows.push(cells)
    })
    return { name: sheet.name, rows }
  })
}
