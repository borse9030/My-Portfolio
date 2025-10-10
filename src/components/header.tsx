"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Linkedin, Code } from 'lucide-react';
import SafeClient from '@/components/safe-client';

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' },
];

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="0.5"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 text-2xl font-bold font-headline text-black">
          <div className="w-8 h-8 p-1.5 bg-black text-white rounded-full flex items-center justify-center">
            <SafeClient>
              <LogoIcon />
            </SafeClient>
          </div>
          <span>PORTFOLIO</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm font-semibold text-black/80 hover:text-black transition-colors">
                {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black">
              <Code className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-lg font-medium text-black/80 hover:text-black transition-colors">
                  {link.label}
              </Link>
            ))}
             <div className="flex items-center gap-6 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black">
                  <Code className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black">
                  <Linkedin className="w-7 h-7" />
                </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
