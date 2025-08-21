import SimpleTopPlayers from "@/components/challenge/simple-top-players";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Challenges({ locale }) {
  const { t } = useTranslation('common');
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
