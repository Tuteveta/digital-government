# Quick Start Guide

Get the E-Government Portal running locally in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git
- Code editor (VS Code recommended)

## Setup Steps

### 1. Clone and Install

```bash
# Clone the repository (or use your forked version)
git clone <your-repo-url>
cd egovernment-portal

# Install dependencies
npm install
```

### 2. Configure Environment

```bash
# Copy the example environment file
cp .env.local.example .env.local

# Edit .env.local with your AWS Cognito credentials
# You can use a text editor or:
code .env.local  # VS Code
nano .env.local  # Terminal editor
```

Add your AWS Cognito credentials:

```env
NEXT_PUBLIC_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_USER_POOL_CLIENT_ID=your-client-id
NEXT_PUBLIC_IDENTITY_POOL_ID=your-identity-pool-id
NEXT_PUBLIC_AWS_REGION=ap-southeast-2
```

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Don't Have AWS Cognito Yet?

You can still run the app - authentication just won't work until you set it up.

### Set Up AWS Cognito (10 minutes)

1. **Go to AWS Console** → Cognito
2. **Create User Pool:**
   - Name: `egovernment-portal-users`
   - Sign-in: Email
   - Password: Default settings
   - MFA: Optional
   - App client: No secret
3. **Create Identity Pool:**
   - Name: `egovernment_portal_identity`
   - Link to User Pool above
4. **Copy IDs** to `.env.local`

Detailed instructions: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## Project Structure

```
egovernment-portal/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── login/             # Login page
│   ├── dashboard/         # Protected dashboard
│   └── ...
├── components/            # React components
│   ├── ui/               # Shadcn components
│   ├── Header.tsx        # Navigation
│   └── LoginForm.tsx     # Auth forms
├── lib/                  # Utilities
│   └── amplify-config.ts # AWS config
└── public/               # Static files (images, PDFs)
```

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run linter

# Git
git status              # Check changes
git add .               # Stage changes
git commit -m "message" # Commit changes
git push                # Push to remote
```

## Adding Content

### Add Images

1. Place image in `public/images/`
2. Use in code:
   ```tsx
   <img src="/images/logo.png" alt="Logo" />
   ```

### Add PDFs

1. Place PDF in `public/documents/`
2. Link in code:
   ```tsx
   <a href="/documents/policy.pdf">Download Policy</a>
   ```

### Add New Page

1. Create folder in `app/`:
   ```bash
   mkdir app/new-page
   ```
2. Create `page.tsx`:
   ```tsx
   export default function NewPage() {
     return <div>New Page Content</div>
   }
   ```
3. Access at: http://localhost:3000/new-page

## VS Code Setup

### Recommended Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript

### Install Extensions

```bash
# Open VS Code
code .

# Install extensions (Command Palette: Cmd/Ctrl + Shift + P)
> Extensions: Install Extensions
```

Search and install the extensions listed above.

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port:
PORT=3001 npm run dev
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Authentication Not Working

1. Check `.env.local` has correct values
2. Verify Cognito is configured
3. Check browser console for errors

## Next Steps

1. ✅ Run locally
2. ✅ Test authentication
3. ✅ Customize content
4. 📖 Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment
5. 🚀 Deploy to AWS Amplify

## Getting Help

- Check [README.md](./README.md) for full documentation
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guide
- Check AWS Amplify docs: https://docs.amplify.aws
- Contact: info@digitalgov.pg

---

**You're all set! Start customizing your E-Government Portal.**
