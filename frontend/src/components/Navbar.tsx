"use client"; // Safe to ignore in a Vite + React SPA, usually a Next.js directive

import { useEffect, useState } from "react";
import { Link } from "react-router"; // React Router v7
import Button from "./Button"; // Your reusable Button component
import { Menu, X } from "lucide-react";
import ConnectModal from "./ConnectModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Tracks mobile menu toggle
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="w-full px-6 py-4 bg-primary border-b-4 border-background">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo that links to homepage */}
        <Link
          to="/"
          className="text-[32px] md:text-[44px] font-bold font-cormorant text-black"
        >
          Samuel Preston
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6">
            {/* Use Link instead of anchor for SPA routing */}
            <Link
              to="/about"
              className="text-[20px] md:text-[24px] font-cormorant text-black"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-[20px] md:text-[24px] font-cormorant text-black"
            >
              Projects
            </Link>
          </div>

          {/* CTA Button wrapped in mailto anchor */}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent border-body text-body hover:bg-body hover:text-accent hover:border-accent text-[24px] md:text-[32px] font-semibold px-4 py-2 rounded-lg"
          >
            Let’s Connect
          </Button>
        </div>

        {/* Mobile Toggle Button (hamburger icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-body border-2 border-body rounded px-1 py-1 text-2xl"
          >
            {isOpen ? <X color="#0C0B22" /> : <Menu color="#0C0B22" />}
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
          to="/about"
          className="text-[20px] font-cormorant text-background"
          onClick={() => setIsOpen(false)}
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="text-[20px] font-cormorant text-background"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-accent border-body text-body hover:bg-body hover:text-accent hover:border-accent text-[24px] md:text-[32px] font-semibold px-4 py-2 rounded-lg"
        >
          Let’s Connect
        </Button>
      </div>
      <ConnectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
}
