// Import des icônes et du logo
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import logo from "@/public/photo/logodusite.webp";

// Composant fonctionnel pour le Header
export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4"> {/* Arrière-plan bleu clair */}
      <nav className="flex items-center justify-between">
        {/* Logo dans un cercle */}
        <div className="flex items-center gap-1"> {/* Conteneur pour le texte et le logo */}
             {/* Texte "GO Event" */}
             <span className="text-white text-2xl font-bold">GO Event</span>

                {/* Logo */}
             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                 <Image
                  src={logo}
                  alt="Logo site gestion des événements"
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
             </div>
        </div>

        {/* Checkbox pour gérer le menu */}
        <input
          type="checkbox"
          id="menu-toggle"
          className="hidden peer"
        />

        {/* Icône burger avec effet de survol uniquement (au survol et non au clic) */}
        <label
          htmlFor="menu-toggle"
          className="md:hidden cursor-pointer text-2xl hover:text-blue-300 transition-colors duration-300"
        >
          <TfiMenuAlt />
        </label>

        {/* Menu principal */}
        <ul
          className="absolute top-16 left-0 w-full bg-blue-500 flex flex-col gap-y-4 py-4 pl-4 transform transition-transform duration-300 peer-checked:translate-x-0 -translate-x-full md:static md:flex md:flex-row md:justify-end md:gap-x-8 md:py-0 md:translate-x-0"
        >
          <li>
            <a href="#" className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md">
              Agenda
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md">
              Espace Client
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
