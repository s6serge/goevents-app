import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'GoEvents-app',
    description: 'Site Web d une salle de conference qui affiche les differents evenements',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full overflow-x-hidden">
            <body className={`${inter.className} h-full flex flex-col overflow-x-hidden`}>
                <Header />
                <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
