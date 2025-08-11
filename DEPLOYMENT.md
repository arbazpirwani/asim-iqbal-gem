# Deployment Guide for Asim Iqbal Gem Website

## Production Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/asim-iqbal-gem.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Add environment variables if needed
   - Deploy

### Option 2: Netlify

1. **Build Configuration**
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy**
   - Connect GitHub repository
   - Set build settings
   - Deploy

### Option 3: AWS Amplify

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify init
   amplify add hosting
   amplify publish
   ```

### Option 4: Self-Hosted (VPS/Cloud)

1. **Server Setup**
   ```bash
   # Install Node.js and PM2
   curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone https://github.com/yourusername/asim-iqbal-gem.git
   cd asim-iqbal-gem
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "asim-iqbal-gem" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Configuration**
   ```nginx
   server {
     listen 80;
     server_name asimiqbalgem.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

## Environment Variables

Create `.env.production` file:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://asimiqbalgem.com

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Pre-Deployment Checklist

- [ ] Run production build locally: `npm run build && npm start`
- [ ] Test all pages and features
- [ ] Verify responsive design on multiple devices
- [ ] Check console for errors
- [ ] Optimize images (already using Next.js Image)
- [ ] Update meta tags and OG images
- [ ] Configure domain and SSL certificate
- [ ] Set up analytics (Google Analytics/Plausible)
- [ ] Configure error monitoring (Sentry)
- [ ] Set up backups
- [ ] Configure CDN (CloudFlare)

## Performance Optimization

1. **Enable ISR (Incremental Static Regeneration)**
   ```tsx
   export const revalidate = 3600 // Revalidate every hour
   ```

2. **Configure Image Optimization**
   - Already configured with Next.js Image component
   - Unsplash images are automatically optimized

3. **Enable Compression**
   ```js
   // next.config.mjs
   compress: true,
   ```

## Monitoring

1. **Set up monitoring tools**
   - Vercel Analytics (built-in with Vercel)
   - Google Analytics
   - Sentry for error tracking

2. **Performance monitoring**
   - Lighthouse CI
   - Web Vitals tracking

## Security

1. **Headers Configuration**
   ```js
   // next.config.mjs
   async headers() {
     return [
       {
         source: '/:path*',
         headers: [
           {
             key: 'X-Frame-Options',
             value: 'DENY',
           },
           {
             key: 'X-Content-Type-Options',
             value: 'nosniff',
           },
           {
             key: 'X-XSS-Protection',
             value: '1; mode=block',
           },
         ],
       },
     ]
   }
   ```

2. **Rate Limiting**
   - Implement rate limiting for contact form
   - Use Cloudflare or similar CDN for DDoS protection

## Maintenance

1. **Regular Updates**
   ```bash
   # Check for updates
   npm outdated
   
   # Update dependencies
   npm update
   
   # Update Next.js
   npm install next@latest react@latest react-dom@latest
   ```

2. **Backup Strategy**
   - Daily backups of content
   - Version control with Git
   - Database backups if applicable

## Support

For deployment issues:
- Check Next.js deployment docs: https://nextjs.org/docs/deployment
- Vercel support: https://vercel.com/support
- Community forum: https://github.com/vercel/next.js/discussions