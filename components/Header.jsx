"use client"; // Mark this as a Client Component

import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
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
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/documents" className="hover:underline">Documents</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/login" className="hover:underline">Connexion</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}