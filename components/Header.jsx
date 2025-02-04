// components/Header.jsx
"use client"; // This file uses client-side state and event handling

import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Link from 'next/link';

export default function Header() {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu (used when a link is clicked)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
          GoEvent
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex md:space-x-8">
            <li>
              <Link href="/" className="hover:underline" onClick={closeMenu}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/documents" className="hover:underline" onClick={closeMenu}>
                Documents
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline" onClick={closeMenu}>
                Connexion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
