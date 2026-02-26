import { Cpu, Heart, ExternalLink, Mail } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: SiGithub,
    href: 'https://github.com/Afnan-Tahib/FUTURE_DS_01',
    label: 'GitHub',
  },
  {
    icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/afnan-tahib-kundalam-7a3881384',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:afnantahibkondalam@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'afnan-tahib-portfolio'
  );

  return (
    <footer className="section-darker border-t border-ai-dark-border">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ai-blue/50 to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-ai flex items-center justify-center shadow-ai-glow">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base font-bold text-white leading-tight">Afnan Tahib</p>
                <p className="text-xs text-ai-text-muted leading-tight">AI & Data Science Student</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              Building Intelligent Systems for the Future. Passionate about ML, Data Science, and AI.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-9 h-9 rounded-lg glass border border-ai-dark-border hover:border-ai-blue/50 hover:bg-ai-blue/10 flex items-center justify-center transition-all duration-200 hover:scale-110 text-white/60 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ai-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {navLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ai-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="mailto:afnantahibkondalam@gmail.com"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-ai-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ai-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Afnan Tahib. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-ai-blue fill-ai-blue mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ai-blue hover:text-white transition-colors flex items-center gap-0.5"
            >
              caffeine.ai
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
