# E-Government Portal

A Next.js-based e-government portal for Papua New Guinea with AWS Cognito authentication, hosted on AWS Amplify.

## Features

- 🔐 AWS Cognito authentication (Sign up, Sign in, Password reset)
- 📱 Responsive design with Tailwind CSS
- 🎨 Modern UI components with Shadcn UI
- 🚀 Optimized for deployment on AWS Amplify
- 📄 Multiple pages: Home, About, Digital Services, Dashboard, etc.
- 🔒 Protected routes for authenticated users

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Authentication:** AWS Amplify & Cognito
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI (Radix UI primitives)
- **Hosting:** AWS Amplify
- **Language:** TypeScript

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- AWS Account with Cognito User Pool configured
- Git for version control

## Local Development Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd egovernment-portal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your AWS Cognito credentials:

```env
NEXT_PUBLIC_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_USER_POOL_CLIENT_ID=your-user-pool-client-id
NEXT_PUBLIC_IDENTITY_POOL_ID=your-identity-pool-id
NEXT_PUBLIC_AWS_REGION=ap-southeast-2
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## AWS Cognito Setup

### Create a User Pool

1. Go to AWS Cognito Console
2. Click "Create user pool"
3. Configure sign-in options (Email)
4. Configure security requirements (password policy)
5. Configure sign-up experience
6. Configure message delivery (email)
7. Create an app client (without client secret)
8. Note down the User Pool ID and App Client ID

### Create an Identity Pool

1. Go to Identity Pools in Cognito
2. Create a new identity pool
3. Enable access to unauthenticated identities (optional)
4. Link your User Pool
5. Note down the Identity Pool ID

## AWS Amplify Deployment

### Method 1: Deploy via Amplify Console (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-git-repo-url>
   git push -u origin main
   ```

2. **Connect to Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Select your Git provider (GitHub, GitLab, etc.)
   - Authorize and select your repository
   - Select the branch (main)

3. **Configure Build Settings**
   
   The build settings should be automatically detected. Verify they look like this:
   
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
         - .next/cache/**/*
   ```

4. **Add Environment Variables**
   
   In the Amplify Console, go to:
   - App Settings → Environment variables
   - Add each variable from your `.env.local` file:
     - `NEXT_PUBLIC_USER_POOL_ID`
     - `NEXT_PUBLIC_USER_POOL_CLIENT_ID`
     - `NEXT_PUBLIC_IDENTITY_POOL_ID`
     - `NEXT_PUBLIC_AWS_REGION`

5. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy your app
   - You'll get a URL like: `https://main.d1234567890.amplifyapp.com`

### Method 2: Deploy via Amplify CLI

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize Amplify in your project
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

## Project Structure

```
egovernment-portal/
├── app/
│   ├── about/              # About page
│   ├── dashboard/          # Protected dashboard
│   ├── digital-services/   # Services page
│   ├── login/              # Login page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── AuthProvider.tsx    # Auth configuration
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Navigation header
│   └── LoginForm.tsx       # Login/signup form
├── lib/
│   ├── amplify-config.ts   # AWS Amplify config
│   └── utils.ts            # Utility functions
├── public/                 # Static assets (add images here)
├── .env.local.example      # Environment variables template
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Adding Static Assets

Place images, PDFs, and other static files in the `public/` directory:

```
public/
├── images/
│   ├── logo.png
│   └── hero-bg.jpg
├── documents/
│   └── policy.pdf
└── favicon.ico
```

Access them in your code using `/`:

```tsx
<Image src="/images/logo.png" alt="Logo" />
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Routes

- `/` - Home page
- `/about` - About us page
- `/digital-services` - Digital services page
- `/infrastructure` - Infrastructure page (to be created)
- `/standards-compliance` - Standards & compliance page (to be created)
- `/news` - News page (to be created)
- `/contact` - Contact page (to be created)
- `/login` - Login/signup page
- `/dashboard` - Protected dashboard (requires authentication)

## Authentication Flow

1. User visits `/login`
2. Can sign up with email and password
3. Receives confirmation code via email
4. Confirms account with code
5. Signs in and is redirected to `/dashboard`
6. Protected routes check authentication status

## Customization

### Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 217 91% 15%;  /* Navy blue */
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### Components

Shadcn UI components are in `components/ui/`. Customize them as needed.

### Pages

Add new pages by creating folders in the `app/` directory.

## Troubleshooting

### Build fails on Amplify

- Check that all environment variables are set
- Verify Node.js version is 18.x or higher
- Check build logs for specific errors

### Authentication not working

- Verify Cognito credentials in environment variables
- Check that User Pool and Identity Pool are properly configured
- Ensure CORS is configured in Cognito if needed

### Styles not loading

- Run `npm run build` locally to check for errors
- Verify Tailwind configuration
- Clear `.next` cache and rebuild

## Support

For issues or questions:
- Email: info@digitalgov.pg
- Create an issue in the repository

## License

© 2026 Digital Transformation Office, Papua New Guinea. All rights reserved.
