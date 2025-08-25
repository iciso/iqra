"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { NextPage } from "next";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

const Home: NextPage<HomePageProps> = async ({ params }) => {
  const { lang } = await params;
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/translations/${lang}/translations.json`);
        if (!response.ok) throw new Error("Failed to load translations");
        const data = await response.json();
        setDict(data);
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    }
    fetchDictionary();
  }, [lang]);

  if (!dict) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">{dict.home?.title || "Welcome to IQRA"}</h1>
      <p className="mb-6">{dict.home?.description || "Test your Islamic knowledge!"}</p>
      <div className="space-x-4">
        <Link href={`/${lang}/challenges`} className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          {dict.challenges?.title || "Challenges"}
        </Link>
        <Link href={`/${lang}/quiz`} className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          {dict.quiz?.title || "Quiz"}
        </Link>
      </div>
    </div>
  );
};

export default Home;
