// app/[lang]/login/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage({ params }: { params: { lang: string } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [dict, setDict] = useState<any>(null);
  const router = useRouter();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(dict?.login.error.replace('{{message}}', data.error));
      } else {
        router.push(`/${params.lang}/challenges`);
      }
    } catch (err) {
      setError(dict?.login.error.replace('{{message}}', 'Network error'));
    }
  };

  if (!dict) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-2xl font-bold mb-4">{dict.login.title}</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">{dict.login.email}</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">{dict.login.password}</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          {dict.login.sign_in}
        </button>
      </form>
    </div>
  );
}