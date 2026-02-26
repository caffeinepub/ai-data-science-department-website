import { ExternalLink, Github, Code2 } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  linkLabel: string;
  linkIcon: 'github' | 'external';
  gradient: string;
  borderColor: string;
}

const projects: Project[] = [
  {
    title: 'FUTURE_DS_01',
    description:
      'Data Science and Analytics project showcasing practical implementation of data processing and analysis techniques. Demonstrates end-to-end data pipeline from raw data ingestion to insightful visualizations.',
    techStack: ['Python', 'Data Science', 'Analytics', 'Pandas', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/Afnan-Tahib/FUTURE_DS_01',
    linkLabel: 'View on GitHub',
    linkIcon: 'github',
    gradient: 'from-ai-blue/20 to-ai-purple/10',
    borderColor: 'border-ai-blue/30',
  },
  {
    title: 'Sales Performance Dashboard – Superstore Analysis',
    description:
      'Interactive Tableau dashboard analyzing sales and profit performance with data visualization insights. Features drill-down capabilities, trend analysis, and KPI tracking across multiple dimensions.',
    techStack: ['Tableau', 'Data Visualization', 'Analytics', 'Business Intelligence'],
    link: 'https://public.tableau.com/app/profile/afnan.tahib/viz/SalesPerformanceDashboardSuperstoreAnalysis_17717554808110/SalesProfitPerformanceDashboard?publish=yes',
    linkLabel: 'Live Demo',
    linkIcon: 'external',
    gradient: 'from-ai-purple/20 to-ai-cyan/10',
    borderColor: 'border-ai-purple/30',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="badge-ai mb-4 inline-block">Portfolio</span>
            <h2 className="section-title-ai text-white mt-3">
              Featured <span className="text-gradient-ai">Projects</span>
            </h2>
            <p className="section-subtitle-ai">
              Real-world applications of data science and AI concepts
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <ScrollAnimation key={project.title} delay={idx * 150}>
              <div
                className={`glass-card rounded-2xl border ${project.borderColor} card-hover-ai overflow-hidden h-full flex flex-col group`}
              >
                {/* Card header gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient.replace('/20', '').replace('/10', '')}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl glass border border-ai-dark-border flex items-center justify-center flex-shrink-0 group-hover:border-ai-blue/40 transition-colors">
                      <Code2 className="w-6 h-6 text-ai-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="badge-ai text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl gradient-ai text-white text-sm font-semibold shadow-ai-glow hover:shadow-ai-glow-lg hover:-translate-y-0.5 transition-all duration-300 group/btn"
                  >
                    {project.linkIcon === 'github' ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {project.linkLabel}
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* More projects note */}
        <ScrollAnimation delay={300}>
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm">
              More projects coming soon.{' '}
              <a
                href="https://github.com/Afnan-Tahib/FUTURE_DS_01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ai-blue hover:text-white transition-colors underline underline-offset-2"
              >
                Follow on GitHub
              </a>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
