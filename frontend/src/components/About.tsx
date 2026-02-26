import { GraduationCap, Target, Lightbulb, Zap } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const strengths = [
  { icon: Lightbulb, label: 'Logical Thinking', desc: 'Analytical approach to complex problems' },
  { icon: Target, label: 'Problem Solving', desc: 'Breaking down challenges systematically' },
  { icon: Zap, label: 'Fast Learner', desc: 'Quickly adapting to new technologies' },
];

const interests = [
  'Machine Learning',
  'Data Science',
  'Deep Learning',
  'Computer Vision',
  'NLP',
  'Data Analytics',
  'Intelligent Systems',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="badge-ai mb-4 inline-block">About Me</span>
            <h2 className="section-title-ai text-white mt-3">
              Who I <span className="text-gradient-ai">Am</span>
            </h2>
            <p className="section-subtitle-ai">
              A passionate AI & Data Science student on a mission to build intelligent systems
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile */}
          <ScrollAnimation direction="left">
            <div className="relative">
              {/* Profile image */}
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 mb-8 lg:mb-0">
                <div className="absolute inset-0 rounded-3xl gradient-ai opacity-20 blur-2xl animate-pulse-slow" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border border-ai-blue/30">
                  <img
                    src="/assets/generated/profile-avatar.dim_400x400.png"
                    alt="Afnan Tahib"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ai-dark/60 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 border border-ai-purple/30">
                  <p className="text-xs text-ai-text-muted">Currently</p>
                  <p className="text-sm font-bold text-white">B.Tech Student</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Info */}
          <ScrollAnimation direction="right">
            <div className="space-y-6">
              {/* Education card */}
              <div className="glass-card rounded-2xl p-6 border border-ai-blue/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-ai flex items-center justify-center flex-shrink-0 shadow-ai-glow">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Education</h3>
                    <p className="text-ai-blue font-semibold text-sm">B.Tech in Artificial Intelligence & Data Science</p>
                    <p className="text-white/60 text-sm mt-1">Priyadarshini Engineering College, Vaniyambadi</p>
                    <span className="badge-cyan mt-2 inline-block">Undergraduate Student</span>
                  </div>
                </div>
              </div>

              {/* Career goal */}
              <div className="glass-card rounded-2xl p-6 border border-ai-purple/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ai-purple/20 border border-ai-purple/30 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-ai-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Career Goal</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Aspiring AI Engineer and Research Enthusiast, dedicated to developing
                      cutting-edge machine learning solutions and contributing to the advancement
                      of artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span key={interest} className="badge-ai">{interest}</span>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {strengths.map(({ icon: Icon, label, desc }) => (
                    <div
                      key={label}
                      className="glass-card rounded-xl p-4 border border-ai-dark-border hover:border-ai-blue/30 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-ai-blue mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="text-xs text-white/50 mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
