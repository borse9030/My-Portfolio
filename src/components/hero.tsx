"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import SafeClient from "./safe-client";

export default function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

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
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["#ff007f", "#7f00ff", "#00d4ff", "#fff"] },
            links: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: true,
              speed: 2,
              straight: false,
            },
            number: { value: 60 },
            opacity: {
              value: 0.6,
              random: true,
              animation: { enable: true, speed: 0.5, minimumValue: 0.3 },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 2, max: 5 },
              animation: { enable: true, speed: 3, minimumValue: 0.3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* LEFT SIDE - Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-left md:w-1/2 space-y-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-headline font-black leading-tight text-black"
          >
            HI, I'M BHAVESH
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-primary text-primary-foreground px-3 py-1 inline-block mt-2"
            >
              A DEVELOPER
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-black/80 font-bold leading-relaxed"
          >
            I'M A COMPUTER SCIENCE AND AI/ML STUDENT PASSIONATE ABOUT BUILDING
            INNOVATIVE SOLUTIONS THAT MAKE A DIFFERENCE. EXPLORE MY WORK AND GET
            IN TOUCH!
          </motion.p>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleContactClick();
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full text-lg transition-all cursor-pointer"
          >
            Contact Me →
          </motion.a>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex gap-5 pt-2"
          >
            <a href="https://github.com/borse9030" target="_blank" rel="noreferrer">
              <SafeClient><Github className="w-6 h-6 text-black hover:scale-110 transition" /></SafeClient>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <SafeClient><Linkedin className="w-6 h-6 text-black hover:scale-110 transition" /></SafeClient>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="rounded-full border-8 border-pink-300 shadow-lg p-2">
            <Image
              src="/IMG_20250902_175543_746.webp"
              alt="Profile picture of Bhavesh for the hero section."
              width={288}
              height={288}
              className="rounded-full object-cover shadow-lg w-72 h-72"
              priority
              data-ai-hint="man portrait"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}