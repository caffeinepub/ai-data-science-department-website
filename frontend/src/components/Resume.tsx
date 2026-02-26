import { Download, FileText, Eye } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Resume() {
  return (
    <section id="resume" className="py-20 lg:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="badge-ai mb-4 inline-block">Curriculum Vitae</span>
            <h2 className="section-title-ai text-white mt-3">
              My <span className="text-gradient-ai">Resume</span>
            </h2>
            <p className="section-subtitle-ai">
              Download my resume to learn more about my skills and experience
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-3xl p-10 border border-ai-blue/25 text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/5 to-ai-purple/5 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 rounded-2xl gradient-ai opacity-20 blur-xl animate-pulse-slow" />
                <div className="relative w-full h-full rounded-2xl gradient-ai flex items-center justify-center shadow-ai-glow">
                  <FileText className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Afnan Tahib</h3>
              <p className="text-ai-blue font-medium mb-1">AI & Data Science Undergraduate</p>
              <p className="text-white/50 text-sm mb-8">
                Priyadarshini Engineering College, Vaniyambadi
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Programming', value: 'Python, C++, SQL' },
                  { label: 'AI/ML', value: 'ML, DL, NLP, CV' },
                  { label: 'Tools', value: 'Tableau, TF, Sklearn' },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-3 border border-ai-dark-border">
                    <p className="text-xs text-white/40 mb-1">{item.label}</p>
                    <p className="text-xs font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-ai text-white font-semibold text-sm shadow-ai-glow hover:shadow-ai-glow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download Resume
                </a>
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl glass border border-ai-blue/40 text-white font-semibold text-sm hover:border-ai-blue/70 hover:bg-ai-blue/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Eye className="w-4 h-4" />
                  View Online
                </a>
              </div>

              <p className="text-white/30 text-xs mt-6">
                PDF format · Last updated 2025
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
