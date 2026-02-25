import { FlaskConical, Code, Users, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ScrollAnimation';

const ongoingProjects = [
  {
    title: 'Federated Learning for Healthcare Data Privacy',
    description: 'Developing privacy-preserving ML models for distributed medical data analysis without centralizing sensitive patient information.',
    teamLead: 'Dr. Priya Sharma',
    status: 'Active',
    funding: 'DST-SERB Grant',
  },
  {
    title: 'Multilingual Sentiment Analysis for Indian Languages',
    description: 'Building transformer-based NLP models capable of understanding sentiment across 10+ Indian regional languages.',
    teamLead: 'Dr. Anita Verma',
    status: 'Active',
    funding: 'AICTE Research Grant',
  },
  {
    title: 'AI-Powered Precision Agriculture System',
    description: 'IoT and ML-based system for real-time crop monitoring, disease detection, and yield prediction for smallholder farmers.',
    teamLead: 'Mr. Suresh Patel',
    status: 'Active',
    funding: 'ICAR Collaboration',
  },
  {
    title: 'Explainable AI for Financial Risk Assessment',
    description: 'Creating interpretable ML models for credit risk scoring that provide transparent, auditable decision explanations.',
    teamLead: 'Dr. Meena Krishnan',
    status: 'Active',
    funding: 'Industry Sponsored',
  },
];

const studentProjects = [
  {
    title: 'DeepFake Detection System',
    description: 'A CNN-based system to detect AI-generated deepfake videos with 94% accuracy using temporal inconsistency analysis.',
    team: 'Rahul K., Priya M., Arun S.',
    year: '2024',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
  },
  {
    title: 'Smart Traffic Management with RL',
    description: 'Reinforcement learning agent that optimizes traffic signal timing to reduce average wait times by 35% in simulations.',
    team: 'Sneha R., Kiran P.',
    year: '2024',
    tags: ['Python', 'PyTorch', 'SUMO', 'OpenAI Gym'],
  },
  {
    title: 'Medical Image Segmentation Tool',
    description: 'U-Net based segmentation model for automated tumor detection in MRI scans, achieving 91% Dice coefficient.',
    team: 'Divya N., Mohan T., Lakshmi V.',
    year: '2023',
    tags: ['Python', 'Keras', 'DICOM', 'React'],
  },
  {
    title: 'Real-time Sign Language Translator',
    description: 'Computer vision application that translates Indian Sign Language gestures to text and speech in real-time.',
    team: 'Aryan B., Pooja S.',
    year: '2024',
    tags: ['Python', 'MediaPipe', 'TensorFlow', 'React Native'],
  },
  {
    title: 'Predictive Maintenance for Industrial IoT',
    description: 'ML pipeline for predicting equipment failures in manufacturing plants using sensor data, reducing downtime by 40%.',
    team: 'Vijay R., Nisha K., Ravi M.',
    year: '2023',
    tags: ['Python', 'Scikit-learn', 'Kafka', 'Grafana'],
  },
  {
    title: 'AI-Powered Resume Screening System',
    description: 'NLP-based automated resume screening tool that matches candidates to job descriptions with 88% recruiter agreement.',
    team: 'Ananya P., Siddharth G.',
    year: '2024',
    tags: ['Python', 'BERT', 'FastAPI', 'Vue.js'],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20 lg:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Innovation Hub
          </p>
          <h2 className="section-title">Research & Projects</h2>
          <p className="section-subtitle">
            Cutting-edge research and student-led projects that push the boundaries of AI and Data Science.
          </p>
        </ScrollAnimation>

        {/* Ongoing Projects */}
        <ScrollAnimation delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg gradient-blue-accent flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy font-heading">Ongoing Research Projects</h3>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {ongoingProjects.map((project, i) => (
            <ScrollAnimation key={project.title} delay={i * 80 + 150}>
              <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 group h-full">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="font-bold text-brand-navy text-base leading-tight">{project.title}</h4>
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs flex-shrink-0">{project.status}</Badge>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-brand-blue-mid">
                    <Users className="w-3.5 h-3.5" />
                    <span className="font-medium">{project.teamLead}</span>
                  </div>
                  <Badge variant="outline" className="text-xs border-brand-blue-pale text-brand-blue-mid">
                    {project.funding}
                  </Badge>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Student Project Showcase */}
        <ScrollAnimation delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg gradient-blue-accent flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy font-heading">Student Project Showcase</h3>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {studentProjects.map((project, i) => (
            <ScrollAnimation key={project.title} delay={i * 70 + 200}>
              <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-5 group h-full flex flex-col">
                <h4 className="font-bold text-brand-navy text-sm leading-tight mb-2">{project.title}</h4>
                <p className="text-xs text-foreground/70 leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-blue-mid font-medium">
                    <Tag className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-brand-blue-pale text-brand-blue-mid border-brand-blue-pale px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
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
