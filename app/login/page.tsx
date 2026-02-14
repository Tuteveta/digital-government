import { LoginForm } from '@/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-blue-900 p-6">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <div className="w-12 h-12 bg-orange-500 rounded-full" />
          <span className="text-2xl font-bold">Digital Government</span>
        </Link>
      </div>
      <LoginForm />
      <div className="mt-6 text-center">
        <Link href="/" className="text-white hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
