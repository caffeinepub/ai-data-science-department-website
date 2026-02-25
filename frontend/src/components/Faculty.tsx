import { Linkedin, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ScrollAnimation';

const facultyMembers = [
  {
    name: 'Dr. Priya Sharma',
    designation: 'Professor & Head of Department',
    specialization: 'Machine Learning & Neural Networks',
    experience: '15 years',
    email: 'priya.sharma@priyadarshini.edu.in',
  },
  {
    name: 'Dr. Rajesh Kumar',
    designation: 'Associate Professor',
    specialization: 'Deep Learning & Computer Vision',
    experience: '12 years',
    email: 'rajesh.kumar@priyadarshini.edu.in',
  },
  {
    name: 'Dr. Anita Verma',
    designation: 'Associate Professor',
    specialization: 'Natural Language Processing',
    experience: '10 years',
    email: 'anita.verma@priyadarshini.edu.in',
  },
  {
    name: 'Mr. Suresh Patel',
    designation: 'Assistant Professor',
    specialization: 'Big Data Analytics & Hadoop',
    experience: '7 years',
    email: 'suresh.patel@priyadarshini.edu.in',
  },
  {
    name: 'Ms. Kavitha Nair',
    designation: 'Assistant Professor',
    specialization: 'Data Mining & Visualization',
    experience: '6 years',
    email: 'kavitha.nair@priyadarshini.edu.in',
  },
  {
    name: 'Mr. Arjun Singh',
    designation: 'Assistant Professor',
    specialization: 'Reinforcement Learning & Robotics',
    experience: '5 years',
    email: 'arjun.singh@priyadarshini.edu.in',
  },
  {
    name: 'Dr. Meena Krishnan',
    designation: 'Associate Professor',
    specialization: 'AI Ethics & Explainable AI',
    experience: '11 years',
    email: 'meena.krishnan@priyadarshini.edu.in',
  },
  {
    name: 'Mr. Vikram Rao',
    designation: 'Assistant Professor',
    specialization: 'Cloud Computing & MLOps',
    experience: '4 years',
    email: 'vikram.rao@priyadarshini.edu.in',
  },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function getDesignationColor(designation: string) {
  if (designation.includes('Professor & Head')) return 'bg-brand-blue-mid text-white';
  if (designation.includes('Associate')) return 'bg-brand-blue-bright/15 text-brand-blue-mid border-brand-blue-bright/30';
  return 'bg-brand-blue-pale text-brand-blue-mid border-brand-blue-pale';
}

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Our Team
          </p>
          <h2 className="section-title">Faculty Members</h2>
          <p className="section-subtitle">
            Experienced educators and researchers dedicated to nurturing the next generation of AI and Data Science professionals.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facultyMembers.map((faculty, i) => (
            <ScrollAnimation key={faculty.name} delay={i * 60}>
              <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group">
                {/* Avatar area */}
                <div className="relative bg-gradient-to-br from-brand-blue-pale to-white pt-6 pb-4 px-6 flex flex-col items-center">
                  <div className="relative">
                    <img
                      src="/assets/generated/faculty-avatar.dim_400x400.png"
                      alt={`${faculty.name} - Faculty member avatar`}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full gradient-blue-accent border-2 border-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 pb-5 pt-3 text-center">
                  <h3 className="font-bold text-brand-navy text-base leading-tight mb-1">{faculty.name}</h3>
                  <Badge
                    className={`text-xs mb-2 ${getDesignationColor(faculty.designation)}`}
                    variant="outline"
                  >
                    {faculty.designation}
                  </Badge>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{faculty.specialization}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-brand-blue-mid font-medium mb-3">
                    <span>{faculty.experience} exp.</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href={`mailto:${faculty.email}`}
                      className="w-8 h-8 rounded-full bg-brand-blue-pale hover:bg-brand-blue-bright hover:text-white text-brand-blue-mid flex items-center justify-center transition-all duration-200"
                      aria-label={`Email ${faculty.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-blue-pale hover:bg-brand-blue-bright hover:text-white text-brand-blue-mid flex items-center justify-center transition-all duration-200"
                      aria-label={`LinkedIn profile of ${faculty.name}`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
