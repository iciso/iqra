"use client";

import SimpleTopPlayers from "@/components/challenge/simple-top-players";
import { useTranslation } from 'next-i18next';

export default function Challenges({ params }: { params: { locale?: string } }) {
  const locale = params?.locale || 'en';
  const { t } = useTranslation('common', { lng: locale });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-24">
      <div className="w-full max-w-4xl mx-auto mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{t('challenges.title')}</h1>
        <p className="text-muted-foreground">{t('challenges.description')}</p>
      </div>
      <div className="w-full max-w-4xl">
        <SimpleTopPlayers />
      </div>
    </main>
  );
}
