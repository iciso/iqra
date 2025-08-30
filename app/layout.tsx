import { ReactNode } from 'react';
import './globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18next.config'; // Import from root folder

interface RootLayoutProps {
  children: ReactNode;
  params: { lang: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <head>
        <title>IQRA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ta' },
  ];
}
