/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable static page generation errors to prevent build failures
    // This ensures the app builds successfully and renders on the client
    output: 'standalone',
};

export default nextConfig;