"use client";

import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "홈" },
  { href: "#intro", label: "소개" },
  { href: "#service", label: "서비스" },
  { href: "#pricing", label: "상품안내" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-black text-xhs-red flex items-center gap-2"
        >
          잘파는연구소 제주점
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-xhs-red font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="https://open.kakao.com/o/s51feKli"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-xhs-red text-white px-4 md:px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-xhs-red-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-xhs-red/20 text-sm md:text-base"
          >
            <MessageCircle size={18} />
            <span>문의하기</span>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-gray-700 hover:text-xhs-red hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-xhs-red font-medium transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
