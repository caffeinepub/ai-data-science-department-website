import { useEffect, useRef, useState } from 'react';
import { Trophy, BookOpen, Briefcase, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ScrollAnimation';

const hackathonWins = [
  { event: 'Smart India Hackathon 2024', position: '1st Place', team: 'Team InnovatAI', year: '2024' },
  { event: 'IIT Bombay TechFest Hackathon', position: '2nd Place', team: 'DataMinds', year: '2023' },
  { event: 'Google Solution Challenge', position: 'Top 50 Global', team: 'AI Pioneers', year: '2023' },
  { event: 'Microsoft Imagine Cup', position: 'National Finalist', team: 'NeuralNexus', year: '2024' },
];

const publications = [
  {
    title: 'Federated Learning for Privacy-Preserving Medical Diagnosis',
    venue: 'IEEE Transactions on Neural Networks',
    year: '2024',
  },
  {
    title: 'Real-time Object Detection Using Lightweight YOLO Variants',
    venue: 'International Journal of Computer Vision',
    year: '2023',
  },
  {
    title: 'Sentiment Analysis of Regional Languages Using Transformer Models',
    venue: 'ACL Workshop on Low-Resource NLP',
    year: '2024',
  },
  {
    title: 'Predictive Analytics for Crop Yield Estimation',
    venue: 'Elsevier Computers and Electronics in Agriculture',
    year: '2023',
  },
];

const internships = [
  { company: 'Google', role: 'ML Engineer Intern', count: 3 },
  { company: 'Microsoft', role: 'Data Science Intern', count: 5 },
  { company: 'Amazon', role: 'AI Research Intern', count: 4 },
  { company: 'Infosys', role: 'Data Analyst Intern', count: 8 },
  { company: 'TCS', role: 'AI Developer Intern', count: 6 },
  { company: 'Wipro', role: 'ML Intern', count: 7 },
];

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

function StatCard({ value, label, icon: Icon }: { value: number; label: string; icon: React.ElementType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, isVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center bg-white rounded-2xl p-6 border border-brand-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl gradient-blue-accent flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-4xl font-bold text-brand-blue-mid font-heading">{count}+</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Student Success
          </p>
          <h2 className="section-title">Student Achievements</h2>
          <p className="section-subtitle">
            Our students consistently excel in competitions, research, and industry placements.
          </p>
        </ScrollAnimation>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <StatCard value={25} label="Hackathon Wins" icon={Trophy} />
          <StatCard value={40} label="Publications" icon={BookOpen} />
          <StatCard value={120} label="Internships" icon={Briefcase} />
          <StatCard value={15} label="Awards" icon={Star} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hackathon Wins */}
          <ScrollAnimation delay={100}>
            <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card overflow-hidden h-full">
              <div className="gradient-blue-accent p-5 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white font-heading">Hackathon Wins</h3>
              </div>
              <div className="p-5 space-y-4">
                {hackathonWins.map((win) => (
                  <div key={win.event} className="flex items-start gap-3 p-3 rounded-xl bg-brand-blue-pale/50 hover:bg-brand-blue-pale transition-colors duration-200">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue-bright/15 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-4 h-4 text-brand-blue-bright" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy leading-tight">{win.event}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="text-xs bg-brand-blue-mid text-white">{win.position}</Badge>
                        <span className="text-xs text-muted-foreground">{win.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Research Publications */}
          <ScrollAnimation delay={200}>
            <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card overflow-hidden h-full">
              <div className="gradient-blue-accent p-5 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white font-heading">Research Publications</h3>
              </div>
              <div className="p-5 space-y-4">
                {publications.map((pub) => (
                  <div key={pub.title} className="p-3 rounded-xl bg-brand-blue-pale/50 hover:bg-brand-blue-pale transition-colors duration-200">
                    <p className="text-sm font-semibold text-brand-navy leading-tight mb-1">{pub.title}</p>
                    <p className="text-xs text-brand-blue-mid italic">{pub.venue}</p>
                    <span className="text-xs text-muted-foreground">{pub.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Internship Highlights */}
          <ScrollAnimation delay={300}>
            <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card overflow-hidden h-full">
              <div className="gradient-blue-accent p-5 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white font-heading">Internship Highlights</h3>
              </div>
              <div className="p-5 space-y-3">
                {internships.map((intern) => (
                  <div key={intern.company} className="flex items-center justify-between p-3 rounded-xl bg-brand-blue-pale/50 hover:bg-brand-blue-pale transition-colors duration-200">
                    <div>
                      <p className="text-sm font-bold text-brand-navy">{intern.company}</p>
                      <p className="text-xs text-muted-foreground">{intern.role}</p>
                    </div>
                    <Badge className="bg-brand-blue-mid text-white text-xs">{intern.count} students</Badge>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
