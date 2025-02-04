"use client";

import Image from "next/image";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import logo from "@/public/photo/logodusite.webp";
import {MenuNav} from "./MenuNav";

export default function Header({ changePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white py-6 md:py-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Image
              src={logo}
              alt="Logo site gestion des événements"
              width={50}
              height={50}
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-texticon">
            GO Event
          </h1>
        </div>

        <button 
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <TfiMenuAlt />
        </button>

        <MenuNav changePage={changePage} menuOpen={menuOpen} />
      </div>
    </header>
  );
}