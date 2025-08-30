import { ReactNode } from 'react';
import './globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Import from root folder

// Define the correct type for params
interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>; // Use Promise for dynamic route params
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = await params; // Await the params to resolve the Promise
  return (
    <html lang={lang}>
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