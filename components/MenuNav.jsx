"use client";

import { TfiMenuAlt } from "react-icons/tfi";
import React, { useState } from "react";

export default function MenuNav({ navLinks, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Icône du menu hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl hover:text-[#F59E0B] transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          <TfiMenuAlt />
        </button>
      </div>

      {/* Menu de navigation */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#1E3A8A] md:bg-transparent shadow-lg md:shadow-none py-4 px-6 md:px-0 md:flex md:gap-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => {
                setMenuOpen(false); // Fermer le menu après clic
                setPage(link.label.toLowerCase()); // Définir la page actuelle
              }}
              className="hover:bg-[#D97706] hover:text-white transition-colors duration-300 px-4 py-2 rounded-md"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
