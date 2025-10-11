import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SafeClient from './safe-client';

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

  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          ACHIEVEMENTS & CERTIFICATES
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            return (
              <Card key={achievement.id} className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 h-56 w-full border-4 border-white rounded-lg overflow-hidden">
                    <Image
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                      data-ai-hint={achievement.imageHint}
                    />
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-2 uppercase">{achievement.title}</h3>
                  <p className="text-foreground/80 font-bold text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
