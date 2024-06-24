/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
   output: 'export',
    images: {
        domains: ['amprotech.co.nz'], // Replace with your domain
        unoptimized:true
        // Optionally, you can specify other configurations like deviceSizes, imageSizes, loader, etc.
      }
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = nextConfig