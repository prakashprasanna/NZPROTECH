/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
   //output: 'export',
    images: {
        domains: ['amprotech.co.nz'], // Replace with your domain
        unoptimized:true
        // Optionally, you can specify other configurations like deviceSizes, imageSizes, loader, etc.
      },
      webpack5: true,
      webpack: (config) => {
        config.resolve.fallback = { fs: false,net:false,dns:false,child_process:false,tls:false };
    
        return config;
      },
      env: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
      },
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = nextConfig