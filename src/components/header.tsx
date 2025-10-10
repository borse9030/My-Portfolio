"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold font-headline text-primary-foreground">
          Bhavesh Folio
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-lg font-medium text-muted-foreground hover:text-primary-foreground transition-colors">
                {link.label}
            </Link>
          ))}
          <Button asChild>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Hire Me</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-lg font-medium text-muted-foreground hover:text-primary-foreground transition-colors">
                  {link.label}
              </Link>
            ))}
            <Button asChild>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Hire Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
