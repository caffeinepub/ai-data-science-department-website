import { Toaster } from '@/components/ui/sonner';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Labs from './components/Labs';
import Achievements from './components/Achievements';
import Events from './components/Events';
import Placements from './components/Placements';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* SEO Meta is handled via index.html */}
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Faculty />
        <Labs />
        <Achievements />
        <Events />
        <Placements />
        <Research />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
