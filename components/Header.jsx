//Composant pour les icons 
import {IoMdMenu} from "react-icons/io"

// Composant fonctionnel React pour l'en-tête (Header)
export default function Header(){
    return <header className="bg-blue-500 text-white p-4" >
        <nav >
            <IoMdMenu className="md:hidden"/>
            <ul className="hidden md:flex justify-center gap-x-8">
                <li><a href='#'>Accueil</a></li>
                <li><a href='#'>Documents</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Connexion</a></li>
            </ul>
        </nav>
    </header>
}