import { useEffect, useRef } from 'react';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const nodes: Node[] = [];
    const NODE_COUNT = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          connections: [],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, `rgba(100, 140, 255, ${alpha})`);
            gradient.addColorStop(1, `rgba(160, 100, 255, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        gradient.addColorStop(0, 'rgba(120, 160, 255, 0.9)');
        gradient.addColorStop(0.5, 'rgba(140, 100, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(100, 140, 255, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(160, 180, 255, 0.9)';
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      initNodes();
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-neural-bg.dim_1920x1080.png"
          alt="Neural network background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ai-dark/60 via-ai-dark/40 to-ai-dark" />
      </div>

      {/* Animated neural network canvas */}
      <div className="absolute inset-0 z-0">
        <NeuralCanvas />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '600px',
            height: '600px',
            left: '-150px',
            top: '-100px',
            background: 'radial-gradient(circle, oklch(0.65 0.22 265 / 0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: '500px',
            height: '500px',
            right: '-100px',
            bottom: '100px',
            background: 'radial-gradient(circle, oklch(0.55 0.25 290 / 0.1) 0%, transparent 70%)',
            animationDelay: '1.5s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-ai-blue/30 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-ai-blue animate-pulse" />
          <span className="text-xs font-medium text-ai-blue tracking-widest uppercase">
            AI & Data Science Portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
          Afnan{' '}
          <span className="text-gradient-ai">Tahib</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/80 mb-6 tracking-wide">
          AI & Data Science Undergraduate
        </p>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-ai-blue font-mono mb-8 tracking-widest uppercase">
          "Building Intelligent Systems for the Future"
        </p>

        {/* Intro */}
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about Machine Learning, Data Analytics, and building intelligent solutions
          that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-ai text-white font-semibold text-sm shadow-ai-glow hover:shadow-ai-glow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl glass border border-ai-blue/40 text-white font-semibold text-sm hover:border-ai-blue/70 hover:bg-ai-blue/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
