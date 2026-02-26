import { Award, BookOpen, Rocket, Clock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    status: 'completed',
    color: 'blue',
  },
  {
    title: 'Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    status: 'completed',
    color: 'purple',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM / Coursera',
    status: 'completed',
    color: 'cyan',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow / Google',
    status: 'in-progress',
    color: 'blue',
  },
];

const workshops = [
  {
    name: 'AI & Machine Learning Workshop',
    organizer: 'Priyadarshini Engineering College',
    date: '2024',
    desc: 'Hands-on workshop covering ML algorithms and practical implementations.',
  },
  {
    name: 'Data Science Bootcamp',
    organizer: 'Online Platform',
    date: '2024',
    desc: 'Intensive bootcamp on data wrangling, EDA, and model building.',
  },
  {
    name: 'Deep Learning Seminar',
    organizer: 'Technical Symposium',
    date: '2023',
    desc: 'Seminar on neural network architectures and deep learning frameworks.',
  },
];

const colorMap: Record<string, { badge: string; dot: string }> = {
  blue: { badge: 'badge-ai', dot: 'bg-ai-blue' },
  purple: { badge: 'badge-purple', dot: 'bg-ai-purple' },
  cyan: { badge: 'badge-cyan', dot: 'bg-ai-cyan' },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="badge-ai mb-4 inline-block">Recognition</span>
            <h2 className="section-title-ai text-white mt-3">
              Achievements &{' '}
              <span className="text-gradient-ai">Certifications</span>
            </h2>
            <p className="section-subtitle-ai">
              Continuous learning and professional development milestones
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <ScrollAnimation delay={0}>
            <div className="glass-card rounded-2xl p-6 border border-ai-blue/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-ai flex items-center justify-center shadow-ai-glow">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => {
                  const colors = colorMap[cert.color];
                  return (
                    <div
                      key={cert.title}
                      className="glass rounded-xl p-4 border border-ai-dark-border hover:border-ai-blue/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-semibold text-white leading-tight">{cert.title}</p>
                        {cert.status === 'in-progress' ? (
                          <span className="flex items-center gap-1 text-xs text-yellow-400/80 flex-shrink-0">
                            <Clock className="w-3 h-3" />
                            In Progress
                          </span>
                        ) : (
                          <span className={`${colors.dot} w-2 h-2 rounded-full flex-shrink-0 mt-1`} />
                        )}
                      </div>
                      <p className="text-xs text-white/50">{cert.issuer}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          {/* Workshops */}
          <ScrollAnimation delay={100}>
            <div className="glass-card rounded-2xl p-6 border border-ai-purple/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ai-purple/20 border border-ai-purple/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-ai-purple" />
                </div>
                <h3 className="text-lg font-bold text-white">Workshops</h3>
              </div>
              <div className="space-y-4">
                {workshops.map((workshop) => (
                  <div
                    key={workshop.name}
                    className="glass rounded-xl p-4 border border-ai-dark-border hover:border-ai-purple/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm font-semibold text-white leading-tight">{workshop.name}</p>
                      <span className="badge-purple text-xs flex-shrink-0">{workshop.date}</span>
                    </div>
                    <p className="text-xs text-ai-purple/80 mb-1">{workshop.organizer}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{workshop.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Hackathons & Research */}
          <ScrollAnimation delay={200}>
            <div className="glass-card rounded-2xl p-6 border border-ai-cyan/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ai-cyan/20 border border-ai-cyan/30 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-ai-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white">Hackathons & Research</h3>
              </div>

              {/* Coming soon state */}
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 rounded-2xl glass border border-ai-cyan/20 flex items-center justify-center mb-4 animate-pulse-slow">
                  <Rocket className="w-8 h-8 text-ai-cyan/60" />
                </div>
                <p className="text-white font-semibold mb-2">Coming Soon</p>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Actively preparing for upcoming hackathons and research opportunities.
                  Stay tuned for exciting updates!
                </p>
                <div className="mt-6 space-y-2 w-full">
                  <div className="glass rounded-xl p-3 border border-ai-cyan/10 text-left">
                    <p className="text-xs font-semibold text-ai-cyan">🎯 Goal</p>
                    <p className="text-xs text-white/50 mt-0.5">Participate in national-level AI hackathons</p>
                  </div>
                  <div className="glass rounded-xl p-3 border border-ai-cyan/10 text-left">
                    <p className="text-xs font-semibold text-ai-cyan">🔬 Research Interest</p>
                    <p className="text-xs text-white/50 mt-0.5">ML applications in real-world problem solving</p>
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
