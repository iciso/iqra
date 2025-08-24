// app/[lang]/challenges/page.tsx
"use client";

import { useState, useEffect } from 'react';
import SimpleTopPlayers from '@/components/challenge/simple-top-players';

export default function Challenges({ params }: { params: { lang: string } }) {
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/locales/${params.lang}/translation.json`);
        if (!response.ok) throw new Error('Failed to load translations');
        const data = await response.json();
        setDict(data);
      } catch (err) {
        console.error('Error loading translations:', err);
      }
    }
    fetchDictionary();
  }, [params.lang]);

  if (!dict) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-24">
      <div className="w-full max-w-4xl mx-auto mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{dict.challenges.title}</h1>
        <p className="text-muted-foreground">{dict.challenges.description}</p>
      </div>
      <div className="w-full max-w-4xl">
        <SimpleTopPlayers />
      </div>
    </main>
  );
}