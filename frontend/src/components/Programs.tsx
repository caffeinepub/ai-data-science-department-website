import { BookOpen, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ScrollAnimation';

const btechCurriculum = {
  core: [
    'Machine Learning & Deep Learning',
    'Data Structures & Algorithms',
    'Big Data Analytics',
    'Statistical Methods for AI',
    'Computer Vision',
    'Natural Language Processing',
    'Cloud Computing & DevOps',
    'Database Management Systems',
  ],
  electives: [
    'Reinforcement Learning',
    'AI Ethics & Governance',
    'IoT & Edge AI',
    'Blockchain Technology',
    'Quantum Computing Basics',
  ],
};

export default function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Academic Offerings
          </p>
          <h2 className="section-title">Programs Offered</h2>
          <p className="section-subtitle">
            Comprehensive programs designed to build expertise in AI and Data Science from fundamentals to advanced applications.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* B.Tech Card */}
          <ScrollAnimation delay={150} direction="left">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-brand-blue-pale">
              {/* Card Header */}
              <div className="gradient-blue-accent p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Undergraduate</Badge>
                </div>
                <h3 className="text-2xl font-bold font-heading">B.Tech in AI & Data Science</h3>
                <div className="flex items-center gap-2 mt-2 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">4 Years (8 Semesters)</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-brand-navy uppercase tracking-wide mb-3">Core Subjects</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {btechCurriculum.core.map((subject) => (
                      <div key={subject} className="flex items-center gap-2 text-sm text-foreground/75">
                        <CheckCircle className="w-4 h-4 text-brand-blue-bright flex-shrink-0" />
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-brand-navy uppercase tracking-wide mb-3">Electives</h4>
                  <div className="flex flex-wrap gap-2">
                    {btechCurriculum.electives.map((elective) => (
                      <Badge key={elective} variant="secondary" className="text-xs bg-brand-blue-pale text-brand-blue-mid border-brand-blue-pale">
                        {elective}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-brand-blue-pale">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { value: '60', label: 'Seats' },
                      { value: '8', label: 'Semesters' },
                      { value: '180+', label: 'Credits' },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="text-xl font-bold text-brand-blue-mid font-heading">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* M.Tech Placeholder */}
          <ScrollAnimation delay={250} direction="right">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-brand-blue-pale relative">
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue-pale flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-brand-blue-mid" />
                </div>
                <Badge className="bg-brand-blue-mid text-white text-sm px-4 py-1.5 mb-3">Coming Soon</Badge>
                <h3 className="text-xl font-bold text-brand-navy font-heading text-center px-4">M.Tech in AI & Data Science</h3>
                <p className="text-sm text-muted-foreground text-center mt-2 px-8">
                  Postgraduate program launching soon. Stay tuned for updates.
                </p>
              </div>

              {/* Background content (blurred) */}
              <div className="opacity-30">
                <div className="bg-brand-blue-pale p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-mid/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-brand-blue-mid" />
                    </div>
                    <Badge variant="secondary">Postgraduate</Badge>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-brand-navy">M.Tech in AI & Data Science</h3>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">2 Years (4 Semesters)</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {['Advanced Machine Learning', 'Research Methodology', 'Thesis Work', 'Specialization Electives'].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-blue-bright" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
