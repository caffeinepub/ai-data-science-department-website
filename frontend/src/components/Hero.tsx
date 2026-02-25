import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-ai-bg.dim_1920x1080.png"
          alt="AI neural network abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        {/* Animated overlay particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-float"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-sm font-medium mb-6"
          style={{ animation: 'slideUp 0.6s ease-out 0.1s both' }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue-light animate-pulse-slow" />
          Priyadarshini Engineering College
        </div>

        {/* Department Name */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
          style={{ animation: 'slideUp 0.6s ease-out 0.2s both', fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Department of
          <span className="block text-gradient mt-1">Artificial Intelligence</span>
          <span className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl mt-1">& Data Science</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light mt-6 mb-10 max-w-2xl mx-auto"
          style={{ animation: 'slideUp 0.6s ease-out 0.35s both' }}
        >
          Innovating the Future with AI & Data Science
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: 'slideUp 0.6s ease-out 0.5s both' }}
        >
          <Button
            size="lg"
            onClick={() => scrollTo('programs')}
            className="bg-white text-brand-blue-mid hover:bg-brand-blue-pale hover:text-brand-navy font-semibold px-8 py-3 rounded-full shadow-blue transition-all duration-300 hover:scale-105 group"
          >
            Explore Programs
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo('contact')}
            className="border-white/60 text-white hover:bg-white/15 hover:border-white font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Us
          </Button>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          style={{ animation: 'slideUp 0.6s ease-out 0.65s both' }}
        >
          {[
            { value: '2020', label: 'Established' },
            { value: '60+', label: 'Students/Year' },
            { value: 'NBA', label: 'Accredited' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/65 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
