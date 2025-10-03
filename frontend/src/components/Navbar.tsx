"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router"; // React Router v7
import { Menu, X } from "lucide-react";
import ConnectModal from "./ConnectModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Tracks mobile menu toggle

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down, hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`transition-transform duration-300 ease-in-out 
        ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
        sticky top-0 z-50 
        bg-rtertiary shadow-lg ring-1 ring-rfg/5
        px-6 py-3`}
    >
      <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
        {/* Logo that links to homepage */}
        <Link
          to='/'
          className='text-3xl font-bold font-cormorant text-rbg'
        >
          Samuel Preston
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-10'>
          <div className='flex items-center gap-6'>
            {/* Use Link instead of anchor for SPA routing */}
            <Link
              to='/about'
              className='text-xl px-3 font-semibold font-cormorant text-rbg rounded-2xl transition-colors duration-200 hover:bg-rbg/10'
            >
              About Me
            </Link>
            <Link
              to='/portfolio'
              className='text-xl px-3 font-semibold font-cormorant text-rbg rounded-2xl transition-colors duration-200 hover:bg-rbg/10'
            >
              Portfolio
            </Link>
          </div>
          <ConnectModal />
        </div>

        {/* Mobile Toggle Button (hamburger icon) */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle Menu'
            className='text-rfg border-2 border-rfg rounded px-1 py-1 text-2xl'
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden flex flex-col items-center gap-4 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to='/about'
          className='text-[20px] font-cormorant text-rbg'
          onClick={() => setIsOpen(false)}
        >
          About Me
        </Link>
        <Link
          to='/portfolio'
          className='text-[20px] font-cormorant text-rbg'
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </Link>
        <ConnectModal />
      </div>
    </nav>
  );
}
