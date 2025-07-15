import { neon } from "@neondatabase/serverless";
import type { QuizQuestion, DifficultyLevel } from "@/types/quiz";

const connectionString = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || process.env.iqra_DATABASE_URL;
if (!connectionString) {
  throw new Error("No Neon database connection string provided. Check environment variables.");
}
const sql = neon(connectionString);

export async function getCategory(categoryId: string) {
  try {
    const { data, error } = await sql`
      SELECT id, title
      FROM categories
      WHERE id = ${categoryId}
    `;
    if (error) {
      console.error("❌ Category fetch error:", error);
      throw error;
    }
    console.log("✅ Category fetched:", data[0]);
    return data[0] || null;
  } catch (error) {
    console.error("❌ Category error:", error);
    throw error;
  }
}

export async function getQuizQuestions(categoryId: string, difficulty: DifficultyLevel): Promise<QuizQuestion[]> {
  try {
    const { data, error } = await sql`
      SELECT id, question_text, options, correct_answer, category_id, difficulty
      FROM questions
      WHERE category_id = ${categoryId}
      AND difficulty = ${difficulty}
      ORDER BY RANDOM()
      LIMIT 50
    `;
    if (error) {
      console.error("❌ Questions fetch error:", error);
      throw error;
    }
    console.log("✅ Questions fetched:", data);
    return data as QuizQuestion[];
  } catch (error) {
    console.error("❌ Questions error:", error);
    throw error;
  }
}
