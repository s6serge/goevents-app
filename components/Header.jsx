// components/Header.jsx
import { IoMdMenu } from "react-icons/io";

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-4">
            <nav>
                {/* Mobile Menu Icon (visible only on small screens) */}
                <IoMdMenu className="md:hidden cursor-pointer" />
                
                {/* Navigation Links (visible only on medium screens and above) */}
                <ul className="hidden md:flex justify-center gap-x-8">
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>Documents</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Connexion</a></li>
                </ul>
            </nav>
        </header>
    );
}
