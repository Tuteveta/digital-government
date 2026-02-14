'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Get in touch with the Digital Transformation Office
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-t-4 border-t-blue-500 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-center">Email Us</CardTitle>
                  <CardDescription className="text-center">Send us an email anytime</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a href="mailto:info@digitalgov.pg" className="text-primary hover:underline text-lg font-semibold">
                    info@digitalgov.pg
                  </a>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-green-500 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-center">Call Us</CardTitle>
                  <CardDescription className="text-center">Mon to Fri, 8am to 5pm</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a href="tel:+675XXXXXXX" className="text-primary hover:underline text-lg font-semibold">
                    +675 XXX XXXX
                  </a>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-orange-500 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-center">Visit Us</CardTitle>
                  <CardDescription className="text-center">Come see us in person</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">
                    Port Moresby<br />
                    Papua New Guinea
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted && (
                      <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
                        ✓ Thank you for your message! We'll be in touch soon.
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell us more about your inquiry..."
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <Button type="submit" className="w-full h-12 text-base">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Office Hours */}
              <div className="space-y-6">
                {/* Map */}
                <Card className="overflow-hidden shadow-xl">
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                    <CardDescription>Digital Transformation Office, Port Moresby</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full h-80 bg-gray-200 relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63256.15907897422!2d147.1130929!3d-9.4438004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6900675d8fa34b4b%3A0x2a15443b527e3!2sPort%20Moresby%2C%20Papua%20New%20Guinea!5e0!3m2!1sen!2s!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="shadow-xl border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Office Hours</CardTitle>
                        <CardDescription>When we're available</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="font-semibold text-gray-700">Monday - Friday</span>
                        <span className="text-primary font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="font-semibold text-gray-700">Saturday</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="font-semibold text-gray-700">Sunday</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-semibold text-gray-700">Public Holidays</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
