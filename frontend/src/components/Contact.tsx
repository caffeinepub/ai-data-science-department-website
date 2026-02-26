import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import ScrollAnimation from './ScrollAnimation';
import { useSubmitContactMessage } from '../hooks/useQueries';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'afnantahibkondalam@gmail.com',
    href: 'mailto:afnantahibkondalam@gmail.com',
    color: 'text-ai-blue',
    bg: 'bg-ai-blue/10 border-ai-blue/30 hover:border-ai-blue/60',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Afnan-Tahib',
    href: 'https://github.com/Afnan-Tahib/FUTURE_DS_01',
    color: 'text-white',
    bg: 'bg-white/5 border-white/20 hover:border-white/40',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'afnan-tahib-kundalam',
    href: 'https://www.linkedin.com/in/afnan-tahib-kundalam-7a3881384',
    color: 'text-ai-cyan',
    bg: 'bg-ai-cyan/10 border-ai-cyan/30 hover:border-ai-cyan/60',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submitMutation = useSubmitContactMessage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    try {
      await submitMutation.mutateAsync(form);
      toast.success('Message sent successfully!', {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message', {
        description: 'Please try again or reach out via email directly.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="badge-ai mb-4 inline-block">Get In Touch</span>
            <h2 className="section-title-ai text-white mt-3">
              Let's <span className="text-gradient-ai">Connect</span>
            </h2>
            <p className="section-subtitle-ai">
              Have a project idea, collaboration opportunity, or just want to say hi?
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollAnimation direction="left">
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8 border border-ai-blue/20">
                <h3 className="text-xl font-bold text-white mb-2">Say Hello 👋</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-4">
                  {socialLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${bg}`}
                    >
                      <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center flex-shrink-0 ${color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</p>
                        <p className={`text-sm font-medium ${color}`}>{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="glass-card rounded-2xl p-5 border border-ai-dark-border flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Available for Opportunities</p>
                  <p className="text-xs text-white/50">Open to internships, collaborations & projects</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation direction="right">
            <div className="glass-card rounded-2xl p-8 border border-ai-purple/20">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {submitMutation.isError && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400">Failed to send. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium text-white/70">
                    Full Name <span className="text-ai-blue">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-white/5 border-ai-dark-border text-white placeholder:text-white/30 focus:border-ai-blue/60 focus:ring-ai-blue/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-white/70">
                    Email Address <span className="text-ai-blue">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white/5 border-ai-dark-border text-white placeholder:text-white/30 focus:border-ai-blue/60 focus:ring-ai-blue/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-white/70">
                    Message <span className="text-ai-blue">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="bg-white/5 border-ai-dark-border text-white placeholder:text-white/30 focus:border-ai-blue/60 focus:ring-ai-blue/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full gradient-ai text-white font-semibold py-3 rounded-xl shadow-ai-glow hover:shadow-ai-glow-lg hover:-translate-y-0.5 transition-all duration-300 group border-0"
                >
                  {submitMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
