"use client";
import { Code, Linkedin } from 'lucide-react';
import SafeClient from './safe-client';

const socialLinks = [
    { icon: Code, href: 'https://github.com', 'aria-label': 'Code' },
    { icon: Linkedin, href: 'https://linkedin.com', 'aria-label': 'LinkedIn' },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-6">
            <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p>&copy; {new Date().getFullYear()} Bhavesh. All rights reserved.</p>
                </div>
                <div className="flex items-center space-x-4">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                            <SafeClient><link.icon className="w-6 h-6" /></SafeClient>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
