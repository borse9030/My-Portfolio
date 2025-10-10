"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Linkedin, Code } from 'lucide-react';
import SafeClient from '@/components/safe-client';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#achievements', label: 'ACHIEVEMENTS' },
  { href: '#resume', label: 'RESUME' },
  { href: '#contact', label: 'CONTACT' },
  { href: '#message-analysis', label: 'MESSAGE ANALYSIS' },
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
  const [activeLink, setActiveLink] = useState('#home');
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        const headerOffset = 80; // Extra space from top
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        if (section) {
          const htmlSection = section as HTMLElement;
          if (
            htmlSection.offsetTop <= scrollPosition &&
            htmlSection.offsetTop + htmlSection.offsetHeight > scrollPosition
          ) {
            setActiveLink(`#${htmlSection.id}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className='fixed top-0 w-full z-50 flex justify-center'>
      <div className="md:hidden container mx-auto flex h-20 items-center justify-between px-4 md:px-6 absolute top-0 w-full">
         <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 text-2xl font-bold font-headline text-black">
          <div className="w-8 h-8 p-1.5 bg-black text-white rounded-full flex items-center justify-center">
            <SafeClient>
              <LogoIcon />
            </SafeClient>
          </div>
          <span className='hidden sm:inline'>PORTFOLIO</span>
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-white/30 backdrop-blur-sm">
            <SafeClient>
            {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </SafeClient>
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg w-full h-screen mt-20 shadow-xl animate-slide-down-fast overflow-y-auto">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-xl font-medium text-black/80 hover:text-black transition-colors">
                  {link.label}
              </Link>
            ))}
             <div className="flex items-center gap-8 pt-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black">
                  <SafeClient><Code className="w-8 h-8" /></SafeClient>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black">
                  <SafeClient><Linkedin className="w-8 h-8" /></SafeClient>
                </a>
            </div>
          </nav>
        </div>
      )}

      <nav className="hidden md:flex items-center space-x-1 bg-black/80 backdrop-blur-lg text-white rounded-full px-4 py-2 mt-4 shadow-2xl animate-slide-down">
        {navLinks.map((link) => (
          <Link 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)} 
              className={cn(
                "text-xs font-semibold uppercase px-4 py-2 rounded-full transition-colors duration-300",
                activeLink === link.href ? "bg-white text-black" : "hover:bg-white/20"
              )}
          >
              {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
