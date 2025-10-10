import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Code, Linkedin, ArrowRight, Dot } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const socialLinks = [
  { icon: Code, href: 'https://github.com', 'aria-label': 'Code' },
  { icon: Linkedin, href: 'https://linkedin.com', 'aria-label': 'LinkedIn' },
];

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-profile');

  return (
    <section id="home" className="container mx-auto min-h-[calc(100vh-80px)] flex items-center px-4 md:px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="font-headline text-5xl md:text-6xl lg:text-7xl tracking-tighter text-black">
            <h1 className="font-black">HI, I'M BHAVESH</h1>
            <h2 className="font-black">A <span className="text-primary-foreground bg-primary inline-block border-r-4 border-primary pr-1 animate-typing">DEVELOPER</span></h2>
          </div>
          <p className="text-lg text-black/80 max-w-lg font-bold">
            I'M A COMPUTER SCIENCE AND AI/ML STUDENT PASSIONATE ABOUT BUILDING INNOVATIVE SOLUTIONS THAT MAKE A DIFFERENCE. EXPLORE MY WORK AND GET IN TOUCH!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80">
              CONTACT ME <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-gray-200/80 border-gray-400 text-black hover:bg-gray-300/80">
              VIEW RESUME <Dot className="ml-2 h-6 w-6" />
            </Button>
          </div>
           <div className="flex items-center space-x-4 pt-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']} className="text-black/80 hover:text-black transition-colors">
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          {heroImage && (
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 bg-red-600 rounded-full" />
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={400}
                height={400}
                className="rounded-full object-cover z-10 relative"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
