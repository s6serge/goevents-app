"use client";

<<<<<<< HEAD
import { TfiMenuAlt } from "react-icons/tfi";
=======

>>>>>>> e3ca7d7 (Correction apporter sur le header et le footer)
import Image from "next/image";
import React from "react"; // Importation nécessaire pour utiliser JSX
import logo from "@/public/photo/logodusite.webp";
import MenuNav from "./MenuNav";

<<<<<<< HEAD
const navLinks = [
  { href: "#", label: "Accueil" },
  { href: "#", label: "Agenda" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Espace Client" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

=======
export default function Header({ setPage }) {
>>>>>>> e3ca7d7 (Correction apporter sur le header et le footer)
  return (
    <header className="bg-[#1E3A8A] text-white py-6 md:py-8 relative z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src={logo}
              alt="Logo site gestion des événements"
              width={50}
              height={50}
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#D97706]">
            GO Event
          </h1>
        </div>

<<<<<<< HEAD
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl hover:text-[#F59E0B] transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            <TfiMenuAlt />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute top-full right-4 bg-[#1E3A8A] shadow-lg w-[75vw] max-w-[350px] rounded-lg flex flex-col gap-3 py-4 px-4 transition-transform duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:static md:w-auto md:max-w-none md:shadow-none md:bg-transparent md:flex md:flex-row md:gap-8 md:py-0 md:px-0`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:bg-[#D97706] hover:text-[#FFFFFF] transition-colors duration-300 px-4 py-2 rounded-md whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
=======
        
        {/* Navigation Menu */}
        <MenuNav setPage={setPage} />
      </div>
>>>>>>> e3ca7d7 (Correction apporter sur le header et le footer)
    </header>
  );
}

