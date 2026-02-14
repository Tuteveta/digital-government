# Deployment Guide - E-Government Portal

This guide covers the complete deployment process for the E-Government Portal on AWS Amplify.

## Prerequisites Checklist

- [ ] AWS Account with appropriate permissions
- [ ] Git repository (GitHub, GitLab, Bitbucket, or AWS CodeCommit)
- [ ] Domain name (optional, but recommended)
- [ ] SSL certificate (AWS Certificate Manager handles this automatically)

## Step 1: Set Up AWS Cognito

### 1.1 Create User Pool

1. Navigate to **AWS Cognito Console** → **User pools** → **Create user pool**

2. **Configure sign-in experience:**
   - Provider types: **Cognito user pool**
   - Cognito user pool sign-in options: **Email**
   - Click **Next**

3. **Configure security requirements:**
   - Password policy: Choose **Cognito defaults** or customize
   - Multi-factor authentication: **Optional** (recommended: Enable)
   - User account recovery: **Email only**
   - Click **Next**

4. **Configure sign-up experience:**
   - Self-service sign-up: **Enable**
   - Attribute verification: **Send email message, verify email address**
   - Required attributes: **email**
   - Click **Next**

5. **Configure message delivery:**
   - Email provider: **Send email with Cognito** (or use SES for production)
   - SES Region: Select your region
   - FROM email address: `noreply@digitalgov.pg` (or your verified SES email)
   - Click **Next**

6. **Integrate your app:**
   - User pool name: `egovernment-portal-users`
   - App client name: `egovernment-portal-web`
   - Client secret: **Don't generate a client secret**
   - Authentication flows: 
     - ✓ ALLOW_USER_PASSWORD_AUTH
     - ✓ ALLOW_REFRESH_TOKEN_AUTH
   - Click **Next**

7. **Review and create**
   - Review all settings
   - Click **Create user pool**

8. **Note down these values:**
   - User Pool ID (e.g., `ap-southeast-2_XXXXXXXXX`)
   - App Client ID (e.g., `abcdefghijklmnopqrstuvwxyz`)

### 1.2 Create Identity Pool

1. Navigate to **AWS Cognito Console** → **Identity pools** → **Create identity pool**

2. Configure:
   - Identity pool name: `egovernment_portal_identity`
   - Enable access to unauthenticated identities: **No** (unless needed)
   
3. **Authentication providers:**
   - Select **Cognito**
   - User Pool ID: (paste from above)
   - App Client ID: (paste from above)

4. **Configure permissions:**
   - Create new IAM roles or use existing
   - Click **Create pool**

5. **Note down:**
   - Identity Pool ID (e.g., `ap-southeast-2:12345678-1234-1234-1234-123456789012`)

## Step 2: Prepare Git Repository

### 2.1 Initialize Git (if not already done)

```bash
cd egovernment-portal
git init
git add .
git commit -m "Initial commit - E-Government Portal"
```

### 2.2 Create Remote Repository

**Option A: GitHub**
1. Go to https://github.com/new
2. Repository name: `egovernment-portal`
3. Visibility: Private (recommended for government projects)
4. Click **Create repository**
5. Follow the instructions to push existing repository:

```bash
git remote add origin https://github.com/your-org/egovernment-portal.git
git branch -M main
git push -u origin main
```

**Option B: AWS CodeCommit**
1. Go to AWS CodeCommit Console
2. Create repository: `egovernment-portal`
3. Follow AWS instructions to push code

## Step 3: Deploy to AWS Amplify

### 3.1 Create Amplify App

1. Go to **AWS Amplify Console** → **All apps** → **New app** → **Host web app**

2. **Select repository:**
   - Choose your Git provider (GitHub, GitLab, Bitbucket, or CodeCommit)
   - Click **Continue**
   - Authorize AWS Amplify to access your repository (GitHub will ask for permissions)

3. **Add repository branch:**
   - Repository: Select `egovernment-portal`
   - Branch: `main`
   - Click **Next**

4. **Configure build settings:**
   - App name: `egovernment-portal`
   - Environment: `production` (or `dev` for development)
   
   The build specification should be auto-detected. Verify it matches:
   
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
   
   - Click **Next**

5. **Review:**
   - Review all settings
   - Click **Save and deploy**

### 3.2 Configure Environment Variables

1. In Amplify Console, go to your app → **App settings** → **Environment variables**

2. Click **Manage variables**

3. Add the following variables:

   | Variable | Value | Example |
   |----------|-------|---------|
   | `NEXT_PUBLIC_USER_POOL_ID` | Your Cognito User Pool ID | `ap-southeast-2_XXXXXXXXX` |
   | `NEXT_PUBLIC_USER_POOL_CLIENT_ID` | Your Cognito App Client ID | `abcdefghijklmnopqrstuvwxyz` |
   | `NEXT_PUBLIC_IDENTITY_POOL_ID` | Your Identity Pool ID | `ap-southeast-2:12345...` |
   | `NEXT_PUBLIC_AWS_REGION` | Your AWS Region | `ap-southeast-2` |

4. Click **Save**

5. **Redeploy:** Go to the app → Click **Redeploy this version**

### 3.3 Monitor Deployment

1. Watch the build progress in real-time
2. Build typically takes 3-5 minutes
3. Once complete, you'll see:
   - ✓ Provision
   - ✓ Build
   - ✓ Deploy
   - ✓ Verify

4. Your app URL will be shown (e.g., `https://main.d123456789.amplifyapp.com`)

## Step 4: Configure Custom Domain (Optional)

### 4.1 Add Domain

1. In Amplify Console → **App settings** → **Domain management**
2. Click **Add domain**
3. Enter your domain: `digitalgov.pg`
4. Click **Configure domain**

### 4.2 DNS Configuration

1. Amplify will provide DNS records to add
2. Add these records to your DNS provider:
   - Type: CNAME
   - Name: www
   - Value: (provided by Amplify)

3. For root domain, you may need an ALIAS or ANAME record

4. SSL certificate is automatically provisioned (can take up to 24 hours)

### 4.3 Verify Domain

1. Wait for DNS propagation (can take up to 48 hours)
2. Amplify will automatically verify the domain
3. SSL will be enabled automatically

## Step 5: Set Up Continuous Deployment

### 5.1 Enable Auto-Deploy

Amplify automatically deploys when you push to the connected branch:

```bash
# Make changes
git add .
git commit -m "Update homepage content"
git push origin main

# Amplify will automatically:
# 1. Detect the push
# 2. Start build
# 3. Run tests
# 4. Deploy to production
```

### 5.2 Set Up Branch Deployments

1. In Amplify Console → **App settings** → **General**
2. For development workflow:
   - `main` branch → Production
   - `develop` branch → Staging
   - `feature/*` branches → Feature previews

## Step 6: Configure Monitoring & Alerts

### 6.1 Enable CloudWatch Monitoring

1. In Amplify Console → **Monitoring**
2. View metrics:
   - Requests
   - Data transfer
   - Errors
   - Latency

### 6.2 Set Up Alerts

1. Go to CloudWatch Console
2. Create alarms for:
   - High error rate
   - Deployment failures
   - High latency

## Step 7: Security Best Practices

### 7.1 Cognito Security

1. **Enable MFA:**
   - Go to Cognito User Pool → **Sign-in experience**
   - Enable MFA: **Required** or **Optional**

2. **Password Policy:**
   - Minimum length: 8 characters
   - Require: Uppercase, lowercase, numbers, special characters

3. **Account Recovery:**
   - Enable email recovery
   - Consider SMS for sensitive accounts

### 7.2 Amplify Security

1. **Enable access logs:**
   - Amplify Console → **App settings** → **Access control**
   - Set up basic auth for development branches

2. **HTTPS Only:**
   - Automatically enabled
   - HTTP redirects to HTTPS

3. **Security Headers:**
   Add to `next.config.mjs`:
   
   ```javascript
   const securityHeaders = [
     {
       key: 'X-DNS-Prefetch-Control',
       value: 'on'
     },
     {
       key: 'Strict-Transport-Security',
       value: 'max-age=63072000; includeSubDomains; preload'
     },
     {
       key: 'X-XSS-Protection',
       value: '1; mode=block'
     },
     {
       key: 'X-Frame-Options',
       value: 'SAMEORIGIN'
     },
     {
       key: 'X-Content-Type-Options',
       value: 'nosniff'
     },
   ]
   ```

## Step 8: Testing

### 8.1 Test Authentication

1. Visit your deployed site
2. Test sign up flow:
   - Create new account
   - Verify email
   - Confirm account
3. Test sign in
4. Test password reset
5. Test protected routes

### 8.2 Test Across Devices

1. Desktop browsers (Chrome, Firefox, Safari, Edge)
2. Mobile browsers (iOS Safari, Chrome Mobile)
3. Different screen sizes

## Step 9: Backup & Disaster Recovery

### 9.1 Cognito Backup

1. Enable **Advanced security** in User Pool
2. Set up AWS Backup for User Pool (if available)
3. Export user data periodically:
   - Use AWS CLI or SDK
   - Store in S3 with versioning

### 9.2 Code Backup

1. Git repository is primary backup
2. Enable branch protection on `main`
3. Require pull request reviews
4. Set up automated backups of Git repository

## Troubleshooting

### Build Fails

**Error: Module not found**
- Solution: Check package.json dependencies
- Run `npm install` locally to verify

**Error: Environment variable not set**
- Solution: Check environment variables in Amplify Console
- Ensure all required variables are set

### Authentication Issues

**Error: Invalid user pool configuration**
- Solution: Verify User Pool ID and Client ID
- Check AWS region matches

**Error: User not confirmed**
- Solution: Check email verification settings
- Verify email delivery in Cognito

### Deployment Issues

**Build succeeds but site shows error**
- Solution: Check browser console for errors
- Verify environment variables are set
- Check CloudWatch logs

## Maintenance

### Regular Tasks

1. **Weekly:**
   - Review CloudWatch metrics
   - Check for security updates
   - Monitor error logs

2. **Monthly:**
   - Update dependencies
   - Review Cognito user growth
   - Test backup restoration

3. **Quarterly:**
   - Security audit
   - Performance optimization
   - Cost optimization

## Cost Optimization

1. **Amplify:** Free tier covers small apps
2. **Cognito:** Free for first 50,000 MAUs
3. **Use CloudWatch to monitor costs**
4. **Set billing alerts**

## Support

For deployment issues:
1. Check AWS Amplify documentation
2. Review Amplify build logs
3. Contact AWS Support
4. Check project documentation

---

**Last Updated:** February 2026
**Version:** 1.0
