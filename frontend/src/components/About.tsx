import { Eye, Target, Calendar, Users, Award } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const highlights = [
  {
    icon: Calendar,
    label: 'Established',
    value: '2020',
    desc: 'Year of inception',
  },
  {
    icon: Users,
    label: 'Intake Capacity',
    value: '60',
    desc: 'Students per year',
  },
  {
    icon: Award,
    label: 'Accreditation',
    value: 'NBA',
    desc: 'Nationally accredited',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Who We Are
          </p>
          <h2 className="section-title">About the Department</h2>
          <p className="section-subtitle">
            Shaping the next generation of AI and Data Science professionals through rigorous academics, cutting-edge research, and industry collaboration.
          </p>
        </ScrollAnimation>

        {/* Introduction */}
        <ScrollAnimation delay={100}>
          <div className="bg-gradient-to-br from-brand-blue-pale to-white rounded-2xl p-8 mb-12 border border-brand-blue-pale shadow-card">
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed text-center max-w-4xl mx-auto">
              Artificial Intelligence and Data Science represent the most transformative technologies of our era. 
              Our department equips students with deep theoretical foundations and hands-on expertise in machine learning, 
              deep learning, big data analytics, and intelligent systems — preparing them to solve real-world challenges 
              and drive innovation across industries.
            </p>
          </div>
        </ScrollAnimation>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollAnimation delay={150} direction="left">
            <div className="h-full bg-white rounded-2xl p-8 border border-brand-blue-pale shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-blue-accent flex items-center justify-center shadow-blue group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy font-heading">Our Vision</h3>
              </div>
              <p className="text-foreground/75 leading-relaxed">
                To be a globally recognized center of excellence in Artificial Intelligence and Data Science education, 
                fostering innovation, ethical AI practices, and producing graduates who lead technological transformation 
                in industry and society.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200} direction="right">
            <div className="h-full bg-white rounded-2xl p-8 border border-brand-blue-pale shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-blue-accent flex items-center justify-center shadow-blue group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy font-heading">Our Mission</h3>
              </div>
              <ul className="text-foreground/75 leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-bright mt-2 flex-shrink-0" />
                  Deliver quality education integrating AI, ML, and Data Science fundamentals with practical applications.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-bright mt-2 flex-shrink-0" />
                  Promote research, innovation, and entrepreneurship in emerging technologies.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-bright mt-2 flex-shrink-0" />
                  Build industry partnerships to ensure graduates are career-ready and globally competitive.
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <ScrollAnimation key={item.label} delay={i * 100 + 250}>
              <div className="text-center bg-white rounded-2xl p-8 border border-brand-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl gradient-blue-accent flex items-center justify-center mx-auto mb-4 shadow-blue group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-brand-blue-mid mb-1 font-heading">{item.value}</div>
                <div className="text-base font-semibold text-brand-navy mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
