import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  color: 'blue' | 'purple' | 'cyan';
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    color: 'blue',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C++', level: 70 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    title: 'AI / ML',
    color: 'purple',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'Deep Learning', level: 70 },
      { name: 'Data Analytics', level: 82 },
      { name: 'NLP (Basic)', level: 55 },
      { name: 'Computer Vision (Basic)', level: 55 },
    ],
  },
  {
    title: 'Tools & Libraries',
    color: 'cyan',
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 82 },
      { name: 'Scikit-learn', level: 78 },
      { name: 'TensorFlow (Basic)', level: 60 },
      { name: 'Tableau', level: 80 },
      { name: 'Power BI', level: 72 },
      { name: 'Matplotlib', level: 83 },
    ],
  },
];

const colorMap = {
  blue: {
    bar: 'from-ai-blue to-ai-purple',
    badge: 'badge-ai',
    heading: 'text-ai-blue',
    border: 'border-ai-blue/20',
    glow: 'hover:border-ai-blue/40',
  },
  purple: {
    bar: 'from-ai-purple to-ai-blue',
    badge: 'badge-purple',
    heading: 'text-ai-purple',
    border: 'border-ai-purple/20',
    glow: 'hover:border-ai-purple/40',
  },
  cyan: {
    bar: 'from-ai-cyan to-ai-blue',
    badge: 'badge-cyan',
    heading: 'text-ai-cyan',
    border: 'border-ai-cyan/20',
    glow: 'hover:border-ai-cyan/40',
  },
};

function SkillBar({ name, level, color }: { name: string; level: number; color: 'blue' | 'purple' | 'cyan' }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const colors = colorMap[color];

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-xs font-mono text-white/40">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-bar-fill bg-gradient-to-r ${colors.bar}`}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="badge-ai mb-4 inline-block">Technical Skills</span>
            <h2 className="section-title-ai text-white mt-3">
              My <span className="text-gradient-ai">Expertise</span>
            </h2>
            <p className="section-subtitle-ai">
              A curated set of tools and technologies I work with
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const colors = colorMap[category.color];
            return (
              <ScrollAnimation key={category.title} delay={idx * 100}>
                <div
                  className={`glass-card rounded-2xl p-6 border ${colors.border} ${colors.glow} transition-all duration-300 card-hover-ai h-full`}
                >
                  <h3 className={`text-lg font-bold mb-6 ${colors.heading} flex items-center gap-2`}>
                    <span className={`w-2 h-2 rounded-full bg-current`} />
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={category.color}
                      />
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Tech badges row */}
        <ScrollAnimation delay={300}>
          <div className="mt-12 text-center">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Git', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Linux', 'Excel'].map((tech) => (
                <span key={tech} className="badge-ai text-xs">{tech}</span>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
