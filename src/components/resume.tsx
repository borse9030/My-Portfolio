import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-32 text-center bg-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
          MY RESUME
        </h2>
        <p className="max-w-2xl mx-auto text-foreground/70 font-bold mb-8 text-sm md:text-base">
          INTERESTED IN MY FULL PROFESSIONAL BACKGROUND? VIEW MY RESUME TO GET A
          COMPREHENSIVE LOOK AT MY SKILLS, EXPERIENCE, AND QUALIFICATIONS.
        </p>
        <Button size="lg" className="bg-white text-black font-bold rounded-full hover:bg-gray-200 shadow-lg">
          <Eye className="mr-2 h-5 w-5" />
          VIEW RESUME
        </Button>
      </div>
    </section>
  );
}
