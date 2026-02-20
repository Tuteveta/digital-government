'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  Home,
  ChevronRight,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { contactInfo } from '@/lib/mockData';

const contactDetails = [
  { icon: Mail,    label: 'General Enquiries',  value: contactInfo.email,        sub: 'Response within 1 business day' },
  { icon: Phone,   label: 'Phone',              value: contactInfo.phone,         sub: 'Monday – Friday, 8am – 5pm' },
  { icon: Mail,    label: 'Technical Support',  value: contactInfo.supportEmail,  sub: '24/7 support available' },
  { icon: MapPin,  label: 'Address',            value: 'Level 5, IPA Haus, Waigani Drive', sub: 'Port Moresby, NCD, PNG' },
];

const officeHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 5:00 PM', open: true },
  { day: 'Saturday',        hours: 'Closed',            open: false },
  { day: 'Sunday',          hours: 'Closed',            open: false },
  { day: 'Public Holidays', hours: 'Closed',            open: false },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        {/* ─── 1. HERO ──────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <nav className="flex items-center gap-2 text-sm mb-6 text-blue-100">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Contact Us</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                <p className="text-xl text-blue-50 mt-2">Get in touch with the Digital Transformation Office</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. CONTACT DETAILS ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-0">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Reach Us</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Information</h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pb-0.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                Support available
              </div>
            </div>
            <div className="border-x border-b border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 sm:divide-x divide-gray-200">
              {contactDetails.map((c, i) => (
                <div key={i} className="p-6 sm:p-7 bg-white hover:bg-gray-50 transition-colors border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <c.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{c.label}</p>
                      <p className="text-sm font-semibold text-gray-900 mb-0.5 break-all">{c.value}</p>
                      <p className="text-xs text-gray-400">{c.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. FORM + LOCATION ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

              {/* Contact Form */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-6">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Enquiry</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Send a Message</h2>
                  </div>
                </div>

                {submitted && (
                  <div className="mb-5 flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">Thank you — we&apos;ll be in touch soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="border border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                    <div className="p-5">
                      <Label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Full Name *</Label>
                      <Input
                        id="name" name="name" value={formData.name} onChange={handleChange}
                        placeholder="John Doe" required
                        className="border-gray-200 text-sm h-10"
                      />
                    </div>
                    <div className="p-5">
                      <Label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Email Address *</Label>
                      <Input
                        id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                        placeholder="john@example.com" required
                        className="border-gray-200 text-sm h-10"
                      />
                    </div>
                  </div>
                  <div className="p-5 border-b border-gray-200">
                    <Label htmlFor="subject" className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Subject *</Label>
                    <Input
                      id="subject" name="subject" value={formData.subject} onChange={handleChange}
                      placeholder="How can we help?" required
                      className="border-gray-200 text-sm h-10"
                    />
                  </div>
                  <div className="p-5 border-b border-gray-200">
                    <Label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Message *</Label>
                    <textarea
                      id="message" name="message" value={formData.message} onChange={handleChange}
                      required rows={5}
                      placeholder="Tell us more about your enquiry..."
                      className="w-full px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary resize-none bg-white"
                    />
                  </div>
                  <div className="p-5">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-2.5 justify-between group">
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </div>

              {/* Location + Hours */}
              <div className="space-y-8">
                {/* Map */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-primary mb-6">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Location</p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Find Us</h2>
                    </div>
                  </div>
                  <div className="border border-gray-200 overflow-hidden">
                    <div className="w-full h-52">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63256.15907897422!2d147.1130929!3d-9.4438004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6900675d8fa34b4b%3A0x2a15443b527e3!2sPort%20Moresby%2C%20Papua%20New%20Guinea!5e0!3m2!1sen!2s!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
                      <p className="text-xs font-semibold text-gray-700">Level 5, IPA Haus, Waigani Drive</p>
                      <p className="text-xs text-gray-400">Port Moresby, National Capital District, PNG</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-primary mb-0">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Office Hours</span>
                  </div>
                  <div className="border-x border-b border-gray-200">
                    {officeHours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white">
                        <span className="text-sm text-gray-700 font-medium">{h.day}</span>
                        <span className={['text-xs font-semibold', h.open ? 'text-emerald-600' : 'text-gray-400'].join(' ')}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
