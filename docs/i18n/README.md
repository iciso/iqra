# Translating the quiz

Each language has one file per quiz category: `locales/<lng>/<category>.json`.
`locales/en/` is made from the code (`data/*.ts`) - never edit it by hand. Tamil quizzes (`ta-*`) stay their own categories and have no file.

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

New languages start `hidden` for these sensitive subjects, because a wrong word there can mislead: **aqeedah, shirk, fiqh, bidah, gender, lgbtq, music, dating, marriage, madhab, inheritance**. Everything else starts at `review`.

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

1. `pnpm review:export bn salah` makes `review/bn/salah.csv` (leave the category out for all of them; `review/bn/ALL.csv` always holds everything). `review/` is not in git.
2. Open the CSV in Excel or Google Sheets. Bangla shows correctly.
3. Read the `english` and `translation` columns. Where the translation is wrong or empty, type the right text in `correction`. Use `reviewer_note` for comments. Do not change the other columns.
4. Send the file back.
5. `pnpm review:import bn review/bn/salah.csv` writes every non-empty `correction` into the JSON. A row whose category, id or field does not exist is rejected and listed (the good rows are still written; the command exits 1).
6. When the scholar is happy: `pnpm review:approve bn salah`. For a hidden subject this is what makes it appear.

Rows: one per field. `field` is `question`, `option1`..`option4` or `explanation`.

## Checks

`pnpm content:check` = `export --check` (fails if `locales/en` drifted from `data/*.ts`; fix with `pnpm content:export`) + `scripts/check-content.ts` (ids exist in English, option counts match, no repeated translated options, status is valid).
