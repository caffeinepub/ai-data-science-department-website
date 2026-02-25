import { Brain, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';
import { SiLinkedin, SiX, SiYoutube, SiInstagram } from 'react-icons/si';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Laboratories', href: '#labs' },
  { label: 'Achievements', href: '#achievements' },
];

const moreLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Placements', href: '#placements' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiYoutube, href: '#', label: 'YouTube' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'ai-ds-dept-pec');

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-blue-accent flex items-center justify-center shadow-blue">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Dept. of AI & Data Science</p>
                <p className="text-xs text-white/60 leading-tight">Priyadarshini Engineering College</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Innovating the Future with AI & Data Science. Shaping tomorrow's technology leaders today.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-blue-bright flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue-bright opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue-bright opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue-light mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">
                  CRPF Road, Bhurkunda, Ranchi, Jharkhand 834010
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                <a href="mailto:contact@priyadarshini.edu.in" className="text-sm text-white/60 hover:text-white transition-colors">
                  contact@priyadarshini.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} Department of AI & Data Science, Priyadarshini Engineering College. All rights reserved.
          </p>
          <p className="text-xs text-white/50 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-brand-blue-light fill-brand-blue-light" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue-light hover:text-white transition-colors flex items-center gap-0.5"
            >
              caffeine.ai
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
