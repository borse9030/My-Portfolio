import { Card, CardContent } from '@/components/ui/card';

export default function MessageAnalysis() {
  return (
    <section id="message-analysis" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-card/20 backdrop-blur-lg p-8 md:p-12 shadow-2xl rounded-3xl max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 uppercase">
            Message Analysis
          </h2>
          <div className="border-2 border-dashed border-gray-400/50 rounded-2xl min-h-[200px] flex items-center justify-center p-8">
            <p className="text-foreground/60 font-bold uppercase tracking-wider">
              Submitted messages will appear here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
