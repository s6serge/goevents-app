import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main'; // Ensure this path is correct
import { Inter } from 'next/font/google';
import './globals.css';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

// Metadata for the app
export const metadata = {
  title: 'GoEvents-app',
  description: 'Site Web d\'une salle de conférence qui affiche les différents événements',
};

// Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <Main>{children}</Main> {/* Use the Main component */}
        <Footer />
      </body>
    </html>
  );
}
