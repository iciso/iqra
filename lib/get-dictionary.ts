// lib/get-dictionary.ts
import 'server-only';
import { notFound } from 'next/navigation';

const dictionaries: { [key: string]: () => Promise<any> } = {
  en: () => import('../public/locales/en/translation.json').then((module) => module.default),
  ta: () => import('../public/locales/ta/translation.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale]) {
    notFound();
  }
  return dictionaries[locale]();
};