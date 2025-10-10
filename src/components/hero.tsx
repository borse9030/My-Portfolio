import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, FileDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', 'aria-label': 'LinkedIn' },
  { icon: Github, href: 'https://github.com', 'aria-label': 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', 'aria-label': 'Twitter' },
];

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

  return (
    <section id="home" className="container mx-auto min-h-[calc(100vh-80px)] flex items-center px-4 md:px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hello, I'm Bhavesh
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            A passionate Full Stack Developer with expertise in creating dynamic and user-friendly web applications. I love turning ideas into reality through code.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']} className="text-muted-foreground hover:text-primary transition-colors">
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="/resume.pdf" download="Bhavesh_Resume.pdf">
                <FileDown className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
             <Button size="lg" variant="secondary" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute bg-primary/20 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse-slow"></div>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={400}
              height={400}
              className="rounded-full object-cover z-10 border-4 border-primary/50 shadow-2xl"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
