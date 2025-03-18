'use client';
// Importation de la configuration de traduction si nécessaire
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider'; // Import du ThemeProvider créé
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18next';

// Chargement de la police Inter avec le sous-ensemble "latin"
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang={i18n.language}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
