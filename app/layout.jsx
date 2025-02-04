'use client';
import { useState } from "react";
import EspaceClient from '@/components/EspaceClient';
import Accueil from '@/components/Accueil';
import Agenda from '@/components/Agenda';
import Contact from '@/components/Contact';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';



export default function RootLayout() {
    const [page, setPage] = useState('accueil'); // L'état de la page active

    return (
        <html lang="en" className="h-full overflow-x-hidden">
            <body >
                {/* En-tête avec le prop setPage */}
                <Header changePage={setPage} />

                <main>
                {/* Contenu principal, où on affiche la page sélectionnée */}
                <div className="flex-grow flex-shrink-0 relative z-0">
                    {page === "accueil" ? ( <Accueil />):
                     
                    
                    page === 'agenda' ? (<Agenda />) :
                    page === 'contact' ? ( <Contact />):
                    page === 'espace' ? (<EspaceClient /> ): null}
                    
                                     
                </div>
                </main>
                {/* Pied de page */}
                <Footer />
            </body>
        </html>
    );
}
