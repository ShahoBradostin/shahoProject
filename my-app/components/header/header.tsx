'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#191D23] text-[#DEDCDC] shadow-lg z-50">
      <div className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#C5BAC4] to-[#979DAB] bg-clip-text text-transparent">SB</h1>
        <nav className="hidden md:flex space-x-8 text-[#C5BAC4]">
          <a href="#about" className="hover:text-[#DEDCDC] transition font-medium">About</a>
          <a href="#projects" className="hover:text-[#DEDCDC] transition font-medium">Projects</a>
          <a href="#contact" className="hover:text-[#DEDCDC] transition font-medium">Contact</a>
        </nav>
        <button 
          className="md:hidden text-[#C5BAC4]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 px-8 py-4 bg-[#2a3038] text-[#C5BAC4]">
          <a href="#about" className="hover:text-[#DEDCDC] transition" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" className="hover:text-[#DEDCDC] transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-[#DEDCDC] transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}