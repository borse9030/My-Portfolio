"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const allProjects = [
  { 
    id: 'project-1', 
    title: 'AI Chatbot Beta', 
    description: 'A research project exploring natural language understanding with a custom-trained chatbot model.', 
    tags: ['Genkit', 'Gemini', 'React'],
    category: 'AI',
    github: '#',
    demo: '#'
  },
  { 
    id: 'project-2', 
    title: 'E-commerce Platform', 
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication.',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    category: 'Web',
    github: '#',
    demo: '#'
  },
  { 
    id: 'project-3', 
    title: 'Image Recognition API', 
    description: 'A deep learning model trained to identify objects in images, exposed via a REST API.',
    tags: ['Python', 'TensorFlow', 'Flask'],
    category: 'AI',
    github: '#',
    demo: '#'
  },
];

const filters = ['All', 'Web', 'AI', 'Other'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">
          PROJECTS
        </h2>
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-white/40 text-black/70 border-white/50 hover:bg-white/80'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const image = projectImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="bg-white/40 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 h-48 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover rounded-2xl"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2 uppercase">{project.title}</h3>
                  <p className="text-foreground/80 font-bold mb-4 h-24">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-gray-200/80 text-black rounded-full px-3 py-1 text-xs font-semibold">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button asChild variant="default" className="bg-white text-black font-bold rounded-full hover:bg-gray-200 shadow-md">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                    </Button>
                    <Button asChild variant="default" className="bg-white text-black font-bold rounded-full hover:bg-gray-200 shadow-md">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
                    </Button>
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
