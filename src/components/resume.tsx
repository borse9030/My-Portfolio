import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import SafeClient from './safe-client';

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-white/10 backdrop-blur-md p-8 md:p-12 shadow-2xl rounded-3xl max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            MY RESUME
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/80 font-bold mb-8 text-sm md:text-base">
            INTERESTED IN MY FULL PROFESSIONAL BACKGROUND? VIEW MY RESUME TO GET A
            COMPREHENSIVE LOOK AT MY SKILLS, EXPERIENCE, AND QUALIFICATIONS.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/80 shadow-lg">
            <SafeClient><Eye className="mr-2 h-5 w-5" /></SafeClient>
            VIEW RESUME
          </Button>
        </div>
      </div>
    </section>
  );
}
