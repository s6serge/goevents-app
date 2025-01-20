// app/layout.jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Corrected import path
import Main from '@/components/Main';
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
    <html lang="fr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header /> {/* Include the Header component */}
        <Main>{children}</Main> {/* Use the Main component to wrap children */}
        <Footer /> {/* Include the Footer component */}
      </body>
    </html>
  );
}
