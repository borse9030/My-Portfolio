
"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import SafeClient from './safe-client';

export default function Hero() {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const headerOffset = 80;
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
                {/* LEFT SIDE */}
                <div className="flex flex-col items-start text-left md:w-1/2 space-y-5">
                    <h1 className="text-5xl md:text-6xl font-headline font-black leading-tight text-black">
                        HI, I'M BHAVESH
                        <br />
                        <span className="bg-primary text-primary-foreground px-3 py-1 inline-block mt-2">
                            A DEVELOPER
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-black/80 font-bold leading-relaxed">
                        I'M A COMPUTER SCIENCE AND AI/ML STUDENT PASSIONATE ABOUT BUILDING
                        INNOVATIVE SOLUTIONS THAT MAKE A DIFFERENCE. EXPLORE MY WORK AND GET
                        IN TOUCH!
                    </p>

                    <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-headline"
                        onClick={handleContactClick}
                    >
                        CONTACT ME →
                    </Button>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-5 pt-2">
                        <a href="https://github.com/borse9030" target="_blank" rel="noreferrer">
                           <SafeClient> <Github className="w-6 h-6 text-black hover:scale-110 transition" /></SafeClient>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                           <SafeClient> <Linkedin className="w-6 h-6 text-black hover:scale-110 transition" /></SafeClient>
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                      <div className="absolute inset-0 bg-pink-300/50 rounded-full animate-pulse-slow" />
                      <Image
                          src="/IMG_20250902_175543_746.webp"
                          alt="Profile picture of Bhavesh for the hero section."
                          width={400}
                          height={400}
                          className="rounded-full object-cover z-10 relative p-1 bg-background"
                          priority
                          data-ai-hint="man portrait"
                      />
                  </div>
                </div>
            </div>
        </section>
    );
}
