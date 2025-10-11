
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    id: 'achievement-1',
    title: 'Software Engineering Job Simulation – Forage',
    description: 'Successfully completed the Software Engineering Job Simulation on Forage, gaining hands-on experience in project scoping, agile methodologies, API integration, and REST API controllers.',
    imageUrl: '/1753912864698.jpg',
    imageHint: 'certificate software'
  },
  {
    id: 'achievement-2',
    title: 'GenAI Powered Data Analytics Job Simulation – Forage',
    description: 'Completed the GenAI Powered Data Analytics Job Simulation on Forage, developing skills in exploratory data analysis, risk profiling, business report writing, and implementing AI-driven collection strategies.',
    imageUrl: '/1753779311390-1.png',
    imageHint: 'certificate analytics'
  },
  {
    id: 'achievement-3',
    title: 'GenAI Job Simulation - BCG X (via Forage)',
    description: 'Successfully completed the GenAI Job Simulation with BCG X on Forage, focusing on data extraction, AI-based data analysis, and developing an AI-powered financial chatbot.',
    imageUrl: '/UC-05f7c8a3-bf01-4bac-a986-23bcb26630d2.jpg',
    imageHint: 'certificate generative ai'
  },
  {
    id: 'achievement-4',
    title: 'Data Analytics Job Simulation - Deloitte (via Forage)',
    description: 'Completed the Deloitte Data Analytics Job Simulation on Forage, gaining practical knowledge in data analysis and forensic technology applications.',
    imageUrl: '/UC-15b2a037-ea7f-488f-b7d4-bc5c879bf913.jpg',
    imageHint: 'certificate data'
  }
];

export default function Achievements() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <section id="achievements" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            ACHIEVEMENTS & CERTIFICATES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className="h-full cursor-pointer"
                onClick={() => setSelectedImg(achievement.imageUrl)}
              >
                <Card className="bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-3xl overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col flex-grow">
                    <div className="relative mb-4 h-56 w-full rounded-lg overflow-hidden">
                      <Image
                        src={achievement.imageUrl}
                        alt={achievement.title}
                        fill
                        className="object-contain"
                        data-ai-hint={achievement.imageHint}
                      />
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-2 uppercase">{achievement.title}</h3>
                    <p className="text-foreground/80 font-bold text-sm flex-grow">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking on the image
          >
            <Image
              src={selectedImg}
              alt="Full Certificate"
              width={1200}
              height={800}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-xl border-4 border-white shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
