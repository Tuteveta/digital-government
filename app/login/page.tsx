'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PortalHeader, PortalFooter } from '@/components/PortalLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  User,
  FileCheck,
  BookOpen,
  CalendarCheck,
  Layers,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { authenticateUser } from '@/lib/mockAuth';

const portalFeatures = [
  {
    icon: Layers,
    title: 'Service Requests',
    desc: 'Request digital services, infrastructure support, and technical assistance from the DTO.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Applications',
    desc: 'Submit compliance assessments, apply for ICT policy alignment, and track approval status.',
  },
  {
    icon: CalendarCheck,
    title: 'Workshop Registration',
    desc: 'Register for DTO-led training programmes, digital skills workshops, and certification courses.',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    desc: 'Access policy documents, technical guides, templates, and training materials.',
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 800));

    const user = authenticateUser(formData.username, formData.password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-5xl">

          <div className="grid md:grid-cols-2 border border-gray-200 bg-white">

            {/* ── LEFT: Login Form ──────────────────────────── */}
            <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-gray-200">

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Secure Access</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Officer Portal Sign In</h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Digital Transformation Officer access portal for Papua New Guinea government agencies.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="username" className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                    Username
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleChange}
                      className="pl-10 h-11 border-gray-200 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="password" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Password
                    </Label>
                    <a href="#" className="text-xs text-primary hover:underline font-medium">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 pr-10 h-11 border-gray-200 text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold h-11 justify-between group"
                  disabled={loading}
                >
                  {loading ? 'Signing in…' : 'Sign In to Portal'}
                  {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>

              {/* Not Registered */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-600 mb-1">Not yet registered?</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                  Portal access is restricted to designated Digital Transformation Officers within
                  government agencies. Contact the DTO to request access.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  Request portal access <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Security Note */}
              <div className="mt-5 flex items-start gap-2.5 p-3 border border-gray-100 bg-gray-50">
                <Shield className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your session is protected with TLS 1.3 encryption. All access attempts are
                  logged and monitored.
                </p>
              </div>
            </div>

            {/* ── RIGHT: Portal Features ────────────────────── */}
            <div className="p-8 sm:p-10 bg-gray-50">
              <div className="mb-7">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">DTO Officer Portal</p>
                <h2 className="text-xl font-bold text-gray-900 mb-2">What You Can Do</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A centralised platform for Digital Transformation Officers across all PNG
                  government agencies to manage services, compliance, and capacity building.
                </p>
              </div>

              {/* Feature list */}
              <div className="border border-gray-200 mb-6">
                {portalFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={['bg-white p-5 flex items-start gap-4', index > 0 ? 'border-t border-gray-200' : ''].join(' ')}
                  >
                    <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 mb-0.5">{feature.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Restricted Access Notice */}
              <div className="border border-primary/20 bg-primary/5 p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">Restricted Access</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  This portal is exclusively for registered Digital Transformation Officers.
                  Unauthorised access is prohibited and subject to disciplinary and legal action.
                </p>
              </div>
            </div>

          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-400 mt-5">
            © 2026 Digital Transformation Office, Papua New Guinea Government.{' '}
            <Link href="/contact" className="hover:text-primary transition-colors">
              Need help?
            </Link>
          </p>

        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
