import { type NextRequest } from "next/server"
import ExcelJS from "exceljs"
import {
  awaitingFirst, isReviewLocale, readReviewFile, reviewCategories,
} from "@/lib/review-sheet/files.server"
import { addReviewSheet, reviewRows } from "@/lib/review-sheet/sheet"

// GET /api/review-sheet?lng=bn|ta&cat=<categoryId>|all -> the scholar review sheet as .xlsx.
// Built on every request from locales/en and locales/<lng>, so it always matches the live translations.
// Linked from /translations. Corrections come back in with: pnpm review:import <lng> <file.xlsx>

const XLSX_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

const badRequest = (message: string) =>
  new Response(message, { status: 400, headers: { "Content-Type": "text/plain; charset=utf-8" } })

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const lng = params.get("lng")
  const cat = params.get("cat")

  if (!isReviewLocale(lng)) return badRequest("lng must be bn or ta")
  const categories = reviewCategories()
  if (cat !== "all" && !categories.some((id) => id === cat)) return badRequest("cat must be a subject id or all")

  const wanted = awaitingFirst(lng, cat === "all" ? categories : [cat as string])
  const workbook = new ExcelJS.Workbook()
  workbook.creator = "IQRA"
  for (const { id, awaiting } of wanted) {
    const english = readReviewFile("en", id)
    if (!english) continue
    addReviewSheet(workbook, id, reviewRows(id, english, readReviewFile(lng, id)), awaiting)
  }

  const body = await workbook.xlsx.writeBuffer()
  return new Response(body as ArrayBuffer, {
    headers: {
      "Content-Type": XLSX_TYPE,
      "Content-Disposition": `attachment; filename="iqra-review-${lng}-${cat}.xlsx"`,
      "Cache-Control": "public, max-age=300",
    },
  })
}
