"use client";

import { TfiMenuAlt } from "react-icons/tfi";
import React, { useState } from "react";

export default function MenuNav({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  return (
    <nav>
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

      {/* Navigation Menu */}
      <ul
        className={`flex flex-col md:flex-row items-center gap-6 bg-[#1E3A8A] md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto py-4 md:py-0 px-4 md:px-0 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <li>
          <a
            href="#"
            onClick={() => setPage("accueil")}
            className="hover:bg-[#D97706] hover:text-[#FFFFFF] transition-colors duration-300 px-4 py-2 rounded-md whitespace-nowrap"
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setPage("agendas")}
            className="hover:bg-[#D97706] hover:text-[#FFFFFF] transition-colors duration-300 px-4 py-2 rounded-md whitespace-nowrap"
          >
            Agenda
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setPage("contact")}
            className="hover:bg-[#D97706] hover:text-[#FFFFFF] transition-colors duration-300 px-4 py-2 rounded-md whitespace-nowrap"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setPage("espaceclient")}
            className="hover:bg-[#D97706] hover:text-[#FFFFFF] transition-colors duration-300 px-4 py-2 rounded-md whitespace-nowrap"
          >
            Espace Client
          </a>
        </li>
      </ul>
    </nav>
  );
}
