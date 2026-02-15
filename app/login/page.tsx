'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PortalHeader, PortalFooter } from '@/components/PortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AlertCircle, Eye, EyeOff, Lock, User } from 'lucide-react';
import { authenticateUser, roleInfo } from '@/lib/mockAuth';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const user = authenticateUser(formData.username, formData.password);

    if (user) {
      // Store user in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
      setLoading(false);
    }
  };

  const quickLogin = (username: string, password: string) => {
    setFormData({ username, password });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <PortalHeader />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to PNG Digital Portal
            </h1>
            <p className="text-gray-600">
              Secure access to government digital services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Login Form */}
            <Card className="shadow-2xl border-t-4 border-t-primary">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Member Login</CardTitle>
                <CardDescription className="text-center">
                  Enter your credentials to access the portal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={loading}
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    <a href="#" className="text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Demo Accounts */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Demo Accounts</CardTitle>
                  <CardDescription>
                    Click on any account below for quick login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries({
                    superadmin: { password: 'super123', role: 'super' },
                    admin: { password: 'admin123', role: 'admin' },
                    support: { password: 'support123', role: 'support' },
                    dto: { password: 'dto123', role: 'dto' },
                  }).map(([username, { password, role }]) => {
                    const info = roleInfo[role as keyof typeof roleInfo];
                    return (
                      <button
                        key={username}
                        onClick={() => quickLogin(username, password)}
                        className="w-full text-left p-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-primary rounded-lg transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              {username}
                            </div>
                            <div className={`text-xs font-medium text-${info.color}-600 mt-1`}>
                              {info.name}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {info.description}
                            </div>
                          </div>
                          <div className="ml-4 px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-600">
                            {password}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    Demo Notice
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 space-y-2">
                  <p>
                    This is a demonstration portal with mock authentication.
                  </p>
                  <p className="text-xs text-gray-600">
                    In production: passwords are hashed, sessions use secure tokens, 
                    2FA is enabled, and all access is logged.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
