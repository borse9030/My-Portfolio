import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const achievements = [
  {
    id: 'achievement-1',
    title: 'Software Engineering Job Simulation – Forage',
    description: 'Successfully completed the Software Engineering Job Simulation on Forage, gaining hands-on experience in project scoping, agile methodologies, API integration, and REST API controllers.',
  },
  {
    id: 'achievement-2',
    title: 'GenAI Powered Data Analytics Job Simulation – Forage',
    description: 'Completed the GenAI Powered Data Analytics Job Simulation on Forage, developing skills in exploratory data analysis, risk profiling, business report writing, and implementing AI-driven collection strategies.',
  },
  {
    id: 'achievement-3',
    title: 'GenAI Job Simulation - BCG X (via Forage)',
    description: 'Successfully completed the GenAI Job Simulation with BCG X on Forage, focusing on data extraction, AI-based data analysis, and developing an AI-powered financial chatbot.',
  },
  {
    id: 'achievement-4',
    title: 'Data Analytics Job Simulation - Deloitte (via Forage)',
    description: 'Completed the Deloitte Data Analytics Job Simulation on Forage, gaining practical knowledge in data analysis and forensic technology applications.',
  },
];

export default function Achievements() {
  const achievementImages = PlaceHolderImages.filter(p => p.id.startsWith('achievement-'));

  return (
    <section id="achievements" className="py-16 md:py-24 bg-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          ACHIEVEMENTS & CERTIFICATES
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const image = achievementImages.find(img => img.id === achievement.id);
            return (
              <Card key={achievement.id} className="bg-white/40 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 h-56 w-full border-4 border-white rounded-lg overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={achievement.title}
                        fill
                        className="object-contain"
                        data-ai-hint={image.imageHint}
                      />
                    )}
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
