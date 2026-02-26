import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="badge-ai mb-4 inline-block">Academic Background</span>
            <h2 className="section-title-ai text-white mt-3">
              My <span className="text-gradient-ai">Education</span>
            </h2>
            <p className="section-subtitle-ai">
              Building a strong foundation in AI and Data Science
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            {/* Timeline container */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-ai-blue via-ai-purple to-transparent" />

              {/* Education entry */}
              <div className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-12 h-12 rounded-xl gradient-ai flex items-center justify-center shadow-ai-glow">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-8 border border-ai-blue/25 card-hover-ai">
                  {/* Status badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="badge-ai">Currently Pursuing</span>
                    <span className="badge-cyan flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Undergraduate
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                    B.Tech in Artificial Intelligence & Data Science
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-ai-blue flex-shrink-0" />
                    <p className="text-ai-blue font-semibold text-sm sm:text-base">
                      Priyadarshini Engineering College, Vaniyambadi
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-ai-blue/30 to-transparent mb-5" />

                  {/* Details grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border border-ai-dark-border">
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="w-4 h-4 text-ai-purple" />
                        <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">Program</p>
                      </div>
                      <p className="text-sm text-white font-medium">4-Year B.Tech Program</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-ai-dark-border">
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="w-4 h-4 text-ai-cyan" />
                        <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">Specialization</p>
                      </div>
                      <p className="text-sm text-white font-medium">AI & Data Science</p>
                    </div>
                  </div>

                  {/* Key subjects */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Key Subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Machine Learning',
                        'Deep Learning',
                        'Data Structures',
                        'Statistics',
                        'Computer Vision',
                        'NLP',
                        'Big Data Analytics',
                        'Python Programming',
                      ].map((subject) => (
                        <span key={subject} className="badge-ai text-xs">{subject}</span>
                      ))}
                    </div>
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
