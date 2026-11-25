# Translating the quiz

Each language has one file per quiz category: `locales/<lng>/<category>.json`.
`locales/en/` is made from the code (`data/*.ts`) - never edit it by hand. Tamil quizzes (`ta-*`) stay their own categories and have no file of their own (see Tamil below).

```json
{
  "_meta": { "status": "review", "title": "...", "description": "..." },
  "questions": {
    "salah-easy-1": { "question": "...", "options": ["...", "...", "...", "..."], "explanation": "..." }
  }
}
```

- Key = the question id from English. A question used by two levels appears once.
- Every field is optional. A missing field shows the English text.
- `options` must keep the same number of items, in the same order, as English. Use `""` for an option you have not done yet.
- Do not translate the correct answer separately: the app finds it by position.

## Status

- `review`: translated, not yet checked by a scholar.
- `approved`: a scholar checked it. Safe to show.
- `hidden`: not shown to players in this language until a scholar approves it.

New languages start `hidden` for these sensitive subjects, because a wrong word there can mislead: **aqeedah, shirk, fiqh, bidah, gender, lgbtq, music, dating, marriage, madhab, inheritance, imagery, islamic-medical-ethics, riba, islamic-finance, takaful, crypto**. Everything else starts at `review`.

## Add a language

```
pnpm content:export              # refresh locales/en from the data
pnpm content:new-locale bn       # creates locales/bn/*.json (empty), skips files that exist
```

## Fill a file (AI or translator)

Add entries under `questions` using the English file as the source. Keep ids exactly. Then:

```
pnpm content:check               # en matches the data; ids, option counts, status are valid
```

## Scholar review

**From the site (Excel):** the page `/translations` (linked from the footer and from the "translation in progress" corner notice) lists every subject for Bangla and Tamil, the hidden ones first under "Waiting for scholar review". Each link downloads an `.xlsx` from `/api/review-sheet?lng=bn|ta&cat=<category>|all`, built on each request from `locales/en` and `locales/<lng>`, so it always matches the live text. `cat=all` is one workbook with one tab per subject, hidden subjects first with a red tab. Layout (`lib/review-sheet/sheet.ts`): green bold header, wrapped cells, yellow `correction` column, frozen at D2, filter on the header. This is the file to hand a scholar.

**From the command line (CSV):**

1. `pnpm review:export bn salah` makes `review/bn/salah.csv` (leave the category out for all of them; `review/bn/ALL.csv` always holds everything). `review/` is not in git.
2. Open the CSV in Excel or Google Sheets. Bangla shows correctly.

Either way:

3. Read the `english` and `translation` columns. Where the translation is wrong or empty, type the right text in `correction`. Use `reviewer_note` for comments. Do not change the other columns.
4. Send the file back.
5. `pnpm review:import bn <file.xlsx or file.csv>` writes every non-empty `correction` into the JSON. Every tab of an `.xlsx` is read. A row whose category, id or field does not exist is rejected and listed (the good rows are still written; the command exits 1). When the `category` column is missing, the CSV file name or the Excel tab name is used.
6. When the scholar is happy: `pnpm review:approve bn salah`. For a hidden subject this is what makes it appear.

Rows: one per field. `field` is `question`, `option1`..`option4` or `explanation`.

## Checks

`pnpm content:check` = `export --check` (fails if `locales/en` drifted from `data/*.ts`; fix with `pnpm content:export`) + `scripts/check-content.ts` (ids exist in English, option counts match, no repeated translated options, status is valid).

## Tamil (ta)

- `locales/ta/<category>.json` exists for every category. The legacy `data/ta-*.ts` quizzes (quran, aqeedah, salah, charity, fiqh) stay live as their own categories for now.
- `pnpm exec tsx scripts/seed-ta-from-legacy.ts` copies that Tamil into the matching `locales/ta` files by position. It copies only when the option count and the correct-answer position match English, and lists what it skipped. Safe to re-run.
- Spellings to use: `docs/i18n/ta-glossary.json` (taken from how `data/ta-*.ts` writes them; rows marked `not found in data/ta-*.ts` need a scholar to confirm).
- Seeded files are `review` (or `hidden` for the sensitive subjects) until a scholar approves them.
