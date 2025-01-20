"use client";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/photo/logodusite.webp";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white py-6 md:py-8 relative">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image src={logo} alt="Logo site gestion des événements" width={50} height={50} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">GO Event</h1>
        </div>

        {/* Hamburger Menu Icon (Only for Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl hover:text-blue-300 transition-colors duration-300"
          >
            <TfiMenuAlt />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-full right-0 bg-blue-600 shadow-lg w-[30vw] flex flex-col gap-4 py-4 px-4 md:w-auto md:flex md:flex-row md:bg-transparent md:shadow-none md:gap-8 md:py-0 md:px-0 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#"
              className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md"
            >
              Agenda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-blue-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md"
            >
              Espace Client
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
