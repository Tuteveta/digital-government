'use client';

import { Amplify } from 'aws-amplify';
import { amplifyConfig } from '@/lib/amplify-config';
import { useEffect } from 'react';

// Configure Amplify
Amplify.configure(amplifyConfig, { ssr: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Any additional auth setup can go here
  }, []);

  return <>{children}</>;
}
