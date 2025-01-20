import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import logo from "@/public/photo/logodusite.webp";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-6 md:py-8"> {/* Adjusted padding for height */}
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
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
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold">GO Event</h1>
        </div>

        {/* Hamburger Menu */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden cursor-pointer text-3xl hover:text-blue-300 transition-colors duration-300"
        >
          <TfiMenuAlt />
        </label>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <a href="#" className="hover:text-blue-300 transition-colors duration-300">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition-colors duration-300">
              Agenda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition-colors duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition-colors duration-300">
              Espace Client
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
