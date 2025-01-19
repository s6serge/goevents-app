import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import './globals.css';

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

// Metadata for the application
export const metadata = {
  title: 'GoEvents-app',
  description: 'Site Web d\'une salle de conférence qui affiche les différents événements',
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="fr"> {/* Changed to 'fr' for French language support */}
      <body className={inter.className}>
        <Header /> {/* Include the Header component */}
        <main>{children}</main> {/* Render nested content */}
      </body>
    </html>
  );
}