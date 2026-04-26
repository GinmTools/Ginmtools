"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ginmLogo from "../images/ginm-logo-transparent.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#catalogs", label: "Catalogs" },
    { href: "#heritage", label: "Heritage" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/97 shadow-md shadow-black/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo — hidden when at top (hero has big logo), visible on scroll */}
        <Link href="/" className="flex items-center group" id="header-logo">
          <div
            className={`transition-all duration-500 ${
              scrolled
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={ginmLogo}
              alt="GINM TOOLS — One Stop. All Solutions Since 1958"
              width={373}
              height={125}
              className="h-[90px] w-auto object-contain sm:h-[96px] md:h-[104px]"
              priority
              placeholder="blur"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-300 hover:text-brand-red ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-industrial-black" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-industrial-black" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="animate-fade-in border-t border-gray-100 bg-white px-6 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 transition-colors hover:text-brand-red"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
