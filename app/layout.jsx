'use client';
import { useState } from "react";
import EspaceClient from '@/components/EspaceClient';
import Accueil from '@/components/Accueil';
import Agenda from '@/components/Agenda';
import Contact from '@/components/Contact';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    const [page, setPage] = useState('accueil'); // L'état de la page active

    return (
        <html lang="fr" className="h-full overflow-x-hidden">
            <body className={`${inter.className} h-full flex flex-col`}>
                {/* En-tête avec le prop setPage */}
                <Header setPage={setPage} />

                {/* Contenu principal, où on affiche la page sélectionnée */}
                <div className="flex-grow flex-shrink-0 relative z-0">
                    {/* Rendu conditionnel selon la page */}
                    {page === 'accueil' && <Accueil />}
                    {page === 'agenda' && <Agenda />}
                    {page === 'contact' && <Contact />}
                    {page === 'EspaceClient' && <EspaceClient />}
                    
                    {/* Si aucune page n'est sélectionnée, vous pouvez afficher des erreurs ou un message */}
                    {!['accueil', 'agenda', 'contact', 'EspaceClient'].includes(page) && <div>404 - Page non trouvée</div>}
                </div>

                {/* Pied de page */}
                <Footer />
            </body>
        </html>
    );
}
