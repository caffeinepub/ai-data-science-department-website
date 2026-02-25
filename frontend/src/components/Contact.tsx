import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollAnimation from './ScrollAnimation';
import { useContactInfo, useSubmitContactMessage } from '../hooks/useQueries';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const { data: contactInfo } = useContactInfo();
  const submitMutation = useSubmitContactMessage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    try {
      await submitMutation.mutateAsync(form);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      // error handled via mutation state
    }
  };

  const address = contactInfo?.address ?? 'Priyadarshini Engineering College, CRPF Road, Near CRPF Camp, Bara Ghaghra, Bhurkunda, Ranchi, Jharkhand 834010';
  const email = contactInfo?.email ?? 'contact@priyadarshini.edu.in';
  const phone = contactInfo?.phone ?? '+91 12345 67890';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-brand-blue-bright text-sm font-semibold uppercase tracking-widest text-center mb-2">
            Get In Touch
          </p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our programs, admissions, or research? We'd love to hear from you.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info + Map */}
          <ScrollAnimation delay={100} direction="left">
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-brand-navy to-brand-blue-mid rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold font-heading mb-6">Department Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/90 mb-0.5">Address</p>
                      <p className="text-sm text-white/70 leading-relaxed">{address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/90 mb-0.5">Email</p>
                      <a href={`mailto:${email}`} className="text-sm text-white/70 hover:text-white transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/90 mb-0.5">Phone</p>
                      <a href={`tel:${phone}`} className="text-sm text-white/70 hover:text-white transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-brand-blue-pale shadow-card">
                <iframe
                  title="Priyadarshini Engineering College Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5!2d85.3!3d23.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sPriyadarshini%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={200} direction="right">
            <div className="bg-white rounded-2xl border border-brand-blue-pale shadow-card p-8">
              <h3 className="text-xl font-bold text-brand-navy font-heading mb-6">Send Us a Message</h3>

              {submitted && !submitMutation.isError && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">Message Sent Successfully!</p>
                    <p className="text-xs text-green-600">We'll get back to you within 24–48 hours.</p>
                  </div>
                </div>
              )}

              {submitMutation.isError && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-700">Failed to send message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium text-brand-navy">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-brand-blue-pale focus:border-brand-blue-bright focus:ring-brand-blue-bright/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-brand-navy">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="border-brand-blue-pale focus:border-brand-blue-bright focus:ring-brand-blue-bright/20"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-sm font-medium text-brand-navy">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="border-brand-blue-pale focus:border-brand-blue-bright focus:ring-brand-blue-bright/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-brand-navy">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="border-brand-blue-pale focus:border-brand-blue-bright focus:ring-brand-blue-bright/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full gradient-blue-accent text-white font-semibold py-3 rounded-xl hover:opacity-90 hover:scale-[1.01] transition-all duration-300 group"
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
