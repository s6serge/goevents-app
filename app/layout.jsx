'use client';
// Importation de la configuration de traduction si nécessaire
import { appWithTranslation } from 'next-i18next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider'; // Import du ThemeProvider créé
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// Chargement de la police Inter avec le sous-ensemble "latin"
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Enveloppe toute l'application dans le ThemeProvider */}
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
