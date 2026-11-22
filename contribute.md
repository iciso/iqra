# Contributing to IQRA

Thank you for your interest in contributing to IQRA! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## How Can I Contribute?

### Code Contributions

1. Fork the repository
2. Create a branch for your feature or bugfix: `git checkout -b feature/your-feature-name`
3. Make your changes, following the project's coding standards
4. Commit your changes with a descriptive commit message
5. Push to your fork: `git push origin feature/your-feature-name`
6. Create a Pull Request to the main repository

### Content Contributions

- Add new vocabulary words
- Provide Quranic examples
- Create new quizzes
- Verify translations
- Improve explanations

### Feedback and Ideas

- Report bugs
- Suggest new features
- Provide feedback on existing features
- Share your learning experience

### Community Support

- Share IQRA with others
- Write about your experience
- Create tutorials
- Answer questions from other users

## Development Setup

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/iqra.git
   cd iqra
   ```

2. Install dependencies (the project uses pnpm)
   ```bash
   pnpm install
   ```

3. Run the development server
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. Database (optional for browsing quizzes, needed for scores, the leaderboard and challenges)

   IQRA stores quiz results, the leaderboard and challenges in a Neon Postgres database.
   Create a `.env.local` file in the project root and set ONE of these to your Neon connection string
   (the code reads them in this order):

   - `DATABASE_URL`
   - `POSTGRES_URL_NO_SSL`
   - `NEON_DATABASE_URL`

   The `challenges` and `leaderboard_entries` tables are created automatically on the first write.
   Without a database the quizzes still work; scores, the leaderboard and challenges stay empty.
   `NODE_ENV`, `VERCEL_ENV` and `VERCEL_URL` are set by Next.js and Vercel - you do not set them.

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update the README.md with details of changes if appropriate
3. The PR should work in development environment (`pnpm lint` and `pnpm build` pass)
4. Your PR will be reviewed by maintainers, who may request changes or provide feedback
5. Once approved, your PR will be merged

## Coding Standards

- Use TypeScript for all new code
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Write tests for new features when possible

## Files to update for IQRA new category

- `data/<category-id>.ts` - the new category and its questions (copy an existing file such as `data/charity.ts`; its `id` is the category id used everywhere below)
- `data/quiz-data-manager.tsx` - import the new file and add it to the list of categories
- `app/subjects/page.tsx` - add it to the `categories` list and to a group's `ids`
- `components/challenge/category-first-challenge-dialog.tsx` - add it to the categories a player can be challenged in
- The subject count ("50 subjects") in `components/home/iqra-hero.tsx`, `lib/seo.ts` and `lib/share-image.tsx`

## Questions?

If you have any questions, feel free to reach out to the maintainers:
- Rafique - WhatsApp: +91 7558845528
- Joy - Email: joy_ahmed_007@yahoo.com, joy@zettabyteincorp.com

Thank you for contributing to IQRA!
