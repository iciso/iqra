"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { submitQuizResult } from "@/lib/supabase-queries";

interface Question {
  id: string;
  question: string;
  options: string[];
  correct_answer: string;
}

export default function QuizContainer({ category, difficulty, challengeId, opponentId }: { category: string; difficulty: string; challengeId?: string; opponentId?: string }) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeTaken, setTimeTaken] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🎯 QUIZ CONTAINER: Setup started", { category, difficulty, challengeId, opponentId });
    if (category && difficulty) {
      loadQuestions();
    }
  }, [category, difficulty, challengeId, opponentId]);

  const loadQuestions = async () => {
    setIsLoading(true);
    try {
      console.log("🔍 QUIZ CONTAINER: Loading questions for", { category, difficulty });
      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .eq("category", category)
        .eq("difficulty", difficulty)
        .limit(10);
      if (error) throw new Error(`Query error: ${error.message}`);
      if (!data || data.length === 0) throw new Error(`No questions found for ${category}/${difficulty}`);
      setQuestions(data);
      console.log("🎯 QUIZ CONTAINER: Questions loaded", data.length);
    } catch (error: any) {
      console.error("❌ QUIZ CONTAINER: Error loading questions", error);
      setError(error.message || "Failed to load questions");
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isLoading && currentQuestionIndex < questions.length) {
      timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isLoading, currentQuestionIndex, questions.length]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
  };

  const nextQuestion = () => {
    if (selectedAnswer) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const submitQuiz = async () => {
    if (!user?.id) return;
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    const result = await submitQuizResult(
      score,
      totalQuestions,
      category,
      difficulty,
      timeTaken,
      answers,
      challengeId
    );
    if (result.success) {
      toast({ title: "Success", description: "Quiz submitted!" });
      // Redirect to results page
      window.location.href = `/quiz/results?score=${score}&totalQuestions=${totalQuestions}&category=${category}&difficulty=${difficulty}${challengeId ? `&challenge=${challengeId}` : ''}${opponentId ? `&opponentId=${opponentId}` : ''}`;
    } else {
      toast({ title: "Error", description: "Failed to submit quiz", variant: "destructive" });
    }
  };

  const handleSubmit = () => {
    console.log("🎯 HANDLE SUBMIT: Index", currentQuestionIndex, "Length", questions.length, "Selected", selectedAnswer);
    if (currentQuestionIndex === questions.length - 1 && selectedAnswer) {
      submitQuiz();
    } else if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    }
  };

  if (isLoading) return <div className="text-center py-4">Loading quiz...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;
  if (currentQuestionIndex >= questions.length) return <div className="text-center py-4">Quiz completed!</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-card bg-card border rounded-lg shadow-md p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p className="mb-4">{currentQuestion.question}</p>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full p-2 border rounded ${selectedAnswer === option ? "bg-blue-200" : "bg-white"}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="bg-green-600 text-white p-2 rounded disabled:bg-gray-400"
        >
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </button>
        <p>Time: {timeTaken}s | Score: {score}/{questions.length}</p>
      </div>
    </div>
  );
}
