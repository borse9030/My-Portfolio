import About from '@/components/about';
import Achievements from '@/components/achievements';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import MessageAnalysis from '@/components/message-analysis';
import Projects from '@/components/projects';
import Resume from '@/components/resume';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
        <MessageAnalysis />
      </main>
      <Footer />
    </div>
  );
}
