import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye } from 'lucide-react';

const projects = [
  { id: 'project-1', title: 'E-commerce Platform', description: 'A full-featured e-commerce site with product listings, cart, and checkout.' },
  { id: 'project-2', title: 'Data Analytics Dashboard', description: 'A dashboard for visualizing and analyzing complex datasets.' },
  { id: 'project-3', title: 'Mobile Banking App UI', description: 'A modern and secure UI concept for a mobile banking application.' },
  { id: 'project-4', title: 'Portfolio Website Builder', description: 'A tool for creating personal portfolio websites with ease.' },
];

export default function Projects() {
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));

  return (
    <section id="projects" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">My Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const image = projectImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="group overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-[300px] transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="font-headline text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-300 mb-4">{project.description}</p>
                      <Button asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Eye className="mr-2 h-4 w-4" /> View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
