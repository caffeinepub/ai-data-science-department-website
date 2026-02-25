import { Brain, BarChart3, Server, Monitor } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const labs = [
  {
    icon: Brain,
    name: 'AI Research Lab',
    description:
      'State-of-the-art facility equipped with NVIDIA GPU workstations, deep learning frameworks (TensorFlow, PyTorch), and specialized hardware for AI model training and inference. Supports research in neural networks, computer vision, and autonomous systems.',
    features: ['40 GPU Workstations', 'NVIDIA A100 GPUs', 'TensorFlow & PyTorch', 'Robotics Kits'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: BarChart3,
    name: 'Data Analytics Lab',
    description:
      'Comprehensive data analysis environment with industry-standard tools including Tableau, Power BI, Apache Spark, and Hadoop ecosystem. Students gain hands-on experience with real-world datasets and enterprise analytics workflows.',
    features: ['Tableau & Power BI', 'Apache Spark', 'Hadoop Cluster', 'R & Python IDEs'],
    color: 'from-indigo-600 to-blue-700',
  },
  {
    icon: Server,
    name: 'High-Performance Computing',
    description:
      'Dedicated HPC cluster with 500+ cores for large-scale computation, distributed training, and big data processing. Includes cloud integration with AWS, Azure, and Google Cloud for scalable workloads.',
    features: ['500+ CPU Cores', 'Cloud Integration', '100TB Storage', 'Kubernetes Cluster'],
    color: 'from-blue-700 to-indigo-800',
  },
  {
    icon: Monitor,
    name: 'Smart Classroom',
    description:
      'Technology-enabled learning spaces with interactive smart boards, video conferencing for guest lectures, and collaborative workstations. Designed to facilitate hybrid learning and industry expert sessions.',
    features: ['Smart Boards', 'Video Conferencing', '60-Seat Capacity', 'Collaborative Pods'],
    color: 'from-sky-600 to-blue-700',
  },
];

export default function Labs() {
  return (
    <section id="labs" className="py-20 lg:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Infrastructure
          </p>
          <h2 className="section-title">Laboratories & Facilities</h2>
          <p className="section-subtitle">
            World-class infrastructure designed to provide students with hands-on experience in cutting-edge technologies.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, i) => (
            <ScrollAnimation key={lab.name} delay={i * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-brand-blue-pale group h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${lab.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <lab.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">{lab.name}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-foreground/70 text-sm leading-relaxed mb-5">{lab.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {lab.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-brand-blue-mid bg-brand-blue-pale rounded-lg px-3 py-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-bright flex-shrink-0" />
                        {feature}
                      </div>
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
