import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, Brush, Layout } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and scalable web applications from scratch, with a focus on performance and clean code."
  },
  {
    icon: Brush,
    title: "Web Design",
    description: "Creating visually appealing and intuitive user interfaces that provide an excellent user experience."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Designing user-centric interfaces based on research and best practices to ensure usability and accessibility."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">My Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card hover:bg-accent/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
              <CardHeader className="items-center p-6">
                <div className="bg-primary/20 p-4 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
