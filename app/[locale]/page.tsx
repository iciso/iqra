// app/[locale]/page.tsx
"use client";

import { useTranslation } from 'react-i18next';

export default function HomePage({ params }: { params: { locale: string } }) {
  const { t } = useTranslation('common', { lng: params.locale });

  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-2xl font-bold mb-4">{t('home.title')}</h1>
      <p className="mb-6">{t('home.description')}</p>
      <a href={`/${params.locale}/challenges`} className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
        {t('challenges.title')}
      </a>
    </div>
  );
}
