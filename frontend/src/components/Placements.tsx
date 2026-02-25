import { useEffect, useRef, useState } from 'react';
import { TrendingUp, DollarSign, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from './ScrollAnimation';

const stats = [
  { value: 92, suffix: '%', label: 'Placement Rate', icon: TrendingUp, desc: 'Students placed within 6 months' },
  { value: 6.5, suffix: ' LPA', label: 'Average Package', icon: DollarSign, desc: 'Median CTC across all placements', isDecimal: true },
  { value: 18, suffix: ' LPA', label: 'Highest Package', icon: Award, desc: 'Top offer received by a student' },
];

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS', 'Wipro',
  'Accenture', 'IBM', 'Cognizant', 'HCL', 'Tech Mahindra', 'Capgemini',
];

function useCountUp(target: number, isVisible: boolean, isDecimal = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, isDecimal]);
  return count;
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(stat.value, isVisible, stat.isDecimal);

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
    <div ref={ref} className="bg-white rounded-2xl p-8 border border-brand-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center group">
      <div className="w-14 h-14 rounded-2xl gradient-blue-accent flex items-center justify-center mx-auto mb-4 shadow-blue group-hover:scale-110 transition-transform duration-300">
        <stat.icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-brand-blue-mid font-heading">
        {count}{stat.suffix}
      </div>
      <div className="text-base font-semibold text-brand-navy mt-2 mb-1">{stat.label}</div>
      <div className="text-sm text-muted-foreground">{stat.desc}</div>
    </div>
  );
}

export default function Placements() {
  return (
    <section id="placements" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Career Outcomes
          </p>
          <h2 className="section-title">Placements & Industry Collaboration</h2>
          <p className="section-subtitle">
            Strong industry partnerships and an excellent placement record that speaks to the quality of our graduates.
          </p>
        </ScrollAnimation>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Partner Companies */}
        <ScrollAnimation delay={100}>
          <h3 className="text-xl font-bold text-brand-navy font-heading text-center mb-8">Our Recruiting Partners</h3>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {companies.map((company) => (
              <div
                key={company}
                className="bg-white rounded-xl border border-brand-blue-pale shadow-xs hover:shadow-card hover:border-brand-blue-light hover:-translate-y-0.5 transition-all duration-300 p-4 flex items-center justify-center group"
              >
                <span className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue-bright transition-colors duration-200 text-center">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Internship Opportunities */}
        <ScrollAnimation delay={150}>
          <div className="bg-gradient-to-br from-brand-navy to-brand-blue-mid rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold font-heading mb-4">Internship Opportunities</h3>
            <p className="text-white/80 text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              We actively connect students with internship opportunities at leading tech companies, startups, and research labs. 
              Our dedicated placement cell works year-round to secure meaningful internships that align with students' career goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              {[
                { value: '120+', label: 'Internships/Year' },
                { value: '50+', label: 'Partner Companies' },
                { value: '85%', label: 'Conversion Rate' },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold font-heading">{s.value}</div>
                  <div className="text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-white text-brand-blue-mid hover:bg-brand-blue-pale font-semibold px-8 rounded-full transition-all duration-300 hover:scale-105 group"
            >
              Explore Opportunities
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
