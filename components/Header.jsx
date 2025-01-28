"use client";

import Image from "next/image";
import MenuNav from "./MenuNav"; // Import du composant MenuNav
import logo from "@/public/photo/logodusite.webp";

const navLinks = [
  { href: "#", label: "Accueil" },
  { href: "#", label: "Agenda" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Espace Client" },
];

export default function Header({ setPage }) {
  return (
    <header className="bg-[#1E3A8A] text-white py-6 md:py-8 relative z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo et titre */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src={logo}
              alt="Logo site gestion des événements"
              width={50}
              height={50}
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#D97706]">
            GO Event
          </h1>
        </div>

        {/* Menu de navigation */}
        <MenuNav navLinks={navLinks} setPage={setPage} />
      </div>
    </header>
  );
}
