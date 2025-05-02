import type { QuizQuestion } from "@/types/quiz"

// Keywords that might indicate a good candidate for an infographic
const timelineKeywords = [
  "timeline",
  "chronology",
  "history",
  "period",
  "era",
  "century",
  "year",
  "date",
  "sequence",
  "order",
  "progression",
  "evolution",
  "development",
  "stages",
]

const comparisonKeywords = [
  "compare",
  "comparison",
  "contrast",
  "difference",
  "versus",
  "vs",
  "types",
  "categories",
  "classification",
  "schools",
  "approaches",
  "methods",
]

const processKeywords = [
  "process",
  "step",
  "procedure",
  "method",
  "technique",
  "ritual",
  "ceremony",
  "stages",
  "phases",
  "sequence",
  "workflow",
  "lifecycle",
  "journey",
]

const mapKeywords = [
  "location",
  "place",
  "region",
  "country",
  "city",
  "geography",
  "map",
  "area",
  "territory",
  "site",
  "landmark",
  "mosque",
  "shrine",
  "tomb",
]

const chartKeywords = [
  "percentage",
  "proportion",
  "statistics",
  "numbers",
  "data",
  "figures",
  "quantity",
  "amount",
  "measure",
  "count",
  "pillars",
  "principles",
]

/**
 * Analyzes a quiz question to determine if it would benefit from an infographic
 * and what type of infographic would be most appropriate
 */
export function analyzeForInfographic(question: QuizQuestion): {
  needsInfographic: boolean
  recommendedType?: "timeline" | "comparison" | "process" | "map" | "chart"
  confidence: number // 0-100
} {
  if (!question.explanation) {
    return { needsInfographic: false, confidence: 0 }
  }

  const text = `${question.question} ${question.explanation}`.toLowerCase()

  // Check for keywords in the text
  const timelineScore = timelineKeywords.filter((keyword) => text.includes(keyword)).length
  const comparisonScore = comparisonKeywords.filter((keyword) => text.includes(keyword)).length
  const processScore = processKeywords.filter((keyword) => text.includes(keyword)).length
  const mapScore = mapKeywords.filter((keyword) => text.includes(keyword)).length
  const chartScore = chartKeywords.filter((keyword) => text.includes(keyword)).length

  // Get the highest score
  const scores = [
    { type: "timeline", score: timelineScore },
    { type: "comparison", score: comparisonScore },
    { type: "process", score: processScore },
    { type: "map", score: mapScore },
    { type: "chart", score: chartScore },
  ]

  scores.sort((a, b) => b.score - a.score)

  // If the highest score is at least 2, recommend an infographic
  if (scores[0].score >= 2) {
    // Calculate confidence based on how much higher the top score is than the second
    const topScore = scores[0].score
    const secondScore = scores[1].score
    const difference = topScore - secondScore

    // Calculate confidence (0-100)
    // Base confidence is 50 if score is 2, 75 if score is 3, 90 if score is 4+
    let confidence = topScore === 2 ? 50 : topScore === 3 ? 75 : 90

    // Adjust confidence based on difference from second highest score
    confidence += difference * 10

    // Cap at 100
    confidence = Math.min(confidence, 100)

    return {
      needsInfographic: true,
      recommendedType: scores[0].type as any,
      confidence,
    }
  }

  return { needsInfographic: false, confidence: 0 }
}

/**
 * Batch analyzes multiple quiz questions to identify candidates for infographics
 */
export function batchAnalyzeForInfographics(questions: QuizQuestion[]): {
  question: QuizQuestion
  analysis: ReturnType<typeof analyzeForInfographic>
}[] {
  return questions
    .map((question) => ({
      question,
      analysis: analyzeForInfographic(question),
    }))
    .sort((a, b) => b.analysis.confidence - a.analysis.confidence)
}
