import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ScrollAnimation';

const upcomingEvents = [
  {
    title: 'National Conference on AI & Machine Learning (NCAIML 2026)',
    date: 'March 15–16, 2026',
    time: '9:00 AM – 5:00 PM',
    venue: 'Main Auditorium, PEC',
    type: 'Conference',
    description: 'Two-day national conference featuring keynote speakers from IITs, industry leaders, and paper presentations by students and researchers.',
  },
  {
    title: 'Workshop on Large Language Models & Prompt Engineering',
    date: 'April 5, 2026',
    time: '10:00 AM – 4:00 PM',
    venue: 'AI Research Lab',
    type: 'Workshop',
    description: 'Hands-on workshop covering GPT-4, LLaMA, and practical prompt engineering techniques for real-world applications.',
  },
  {
    title: 'DataHack 2026 – 24-Hour Hackathon',
    date: 'May 10–11, 2026',
    time: 'Starts 9:00 AM',
    venue: 'Computing Lab & Smart Classrooms',
    type: 'Hackathon',
    description: 'Annual 24-hour hackathon with exciting problem statements from industry partners. Cash prizes and internship opportunities for winners.',
  },
  {
    title: 'Industry Expert Talk: AI in Healthcare',
    date: 'March 28, 2026',
    time: '2:00 PM – 4:00 PM',
    venue: 'Smart Classroom 1',
    type: 'Guest Lecture',
    description: 'Guest lecture by Dr. Ramesh Iyer, Chief AI Officer at Apollo Hospitals, on transformative applications of AI in modern healthcare.',
  },
];

const pastEvents = [
  {
    image: '/assets/generated/event-thumb-1.dim_800x500.png',
    title: 'AI Workshop 2025',
    caption: 'Students at the hands-on AI & ML workshop with industry mentors',
    date: 'November 2025',
  },
  {
    image: '/assets/generated/event-thumb-2.dim_800x500.png',
    title: 'DataHack 2025',
    caption: 'Hackathon competition with 200+ participants from across the state',
    date: 'September 2025',
  },
  {
    image: '/assets/generated/event-thumb-3.dim_800x500.png',
    title: 'Guest Lecture Series',
    caption: 'Seminar by industry experts on emerging AI trends and career paths',
    date: 'August 2025',
  },
  {
    image: '/assets/generated/event-thumb-4.dim_800x500.png',
    title: 'AI Robotics Demo Day',
    caption: 'Student project showcase featuring AI-powered robotics demonstrations',
    date: 'July 2025',
  },
];

const typeColors: Record<string, string> = {
  Conference: 'bg-brand-blue-mid text-white',
  Workshop: 'bg-indigo-600 text-white',
  Hackathon: 'bg-blue-700 text-white',
  'Guest Lecture': 'bg-sky-600 text-white',
};

export default function Events() {
  return (
    <section id="events" className="py-20 lg:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Stay Updated
          </p>
          <h2 className="section-title">Events & Workshops</h2>
          <p className="section-subtitle">
            Engaging academic events, industry workshops, and competitions to enrich student learning beyond the classroom.
          </p>
        </ScrollAnimation>

        {/* Upcoming Events */}
        <ScrollAnimation delay={100}>
          <h3 className="text-xl font-bold text-brand-navy font-heading mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-blue-bright animate-pulse-slow" />
            Upcoming Events
          </h3>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {upcomingEvents.map((event, i) => (
            <ScrollAnimation key={event.title} delay={i * 80 + 150}>
              <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-5 group h-full">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <Badge className={`text-xs ${typeColors[event.type] || 'bg-brand-blue-mid text-white'}`}>
                    {event.type}
                  </Badge>
                  <ArrowRight className="w-4 h-4 text-brand-blue-bright opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-0.5" />
                </div>
                <h4 className="font-bold text-brand-navy text-base leading-tight mb-2">{event.title}</h4>
                <p className="text-sm text-foreground/65 mb-4 leading-relaxed">{event.description}</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-brand-blue-mid">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Past Events Gallery */}
        <ScrollAnimation delay={100}>
          <h3 className="text-xl font-bold text-brand-navy font-heading mb-6">Past Events Gallery</h3>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pastEvents.map((event, i) => (
            <ScrollAnimation key={event.title} delay={i * 80 + 200}>
              <div className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-brand-blue-pale bg-white">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={event.image}
                    alt={event.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">{event.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{event.caption}</p>
                  <span className="text-xs text-brand-blue-mid font-medium">{event.date}</span>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
