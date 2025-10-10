"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Firebase"
];

const experience = [
  { role: "Full Stack Developer", company: "Tech Solutions Inc.", duration: "2021 - Present" },
  { role: "Frontend Developer", company: "Web Wizards LLC", duration: "2019 - 2021" },
];

const education = [
  { degree: "Bachelor of Technology in Computer Science", university: "University of Engineering", duration: "2015 - 2019" },
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-profile');

  return (
    <section id="about" className="bg-white/30 backdrop-blur-sm py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl rounded-none">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I am a dedicated and results-driven Full Stack Developer with a passion for building innovative and efficient web applications. With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex challenges and delivering high-quality solutions.
            </p>
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="mt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <div key={skill} className="bg-background px-4 py-2 rounded-none text-sm font-medium shadow-sm">{skill}</div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="experience" className="mt-6 space-y-4">
                {experience.map(exp => (
                  <Card key={exp.company} className="rounded-none">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company} | {exp.duration}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="education" className="mt-6 space-y-4">
                {education.map(edu => (
                  <Card key={edu.university} className="rounded-none">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.university} | {edu.duration}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
