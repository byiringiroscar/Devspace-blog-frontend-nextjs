/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['127.0.0.1', 'images.pexels.com', 'devspace-60v7.onrender.com'],
        remotePatterns: [
            {
              protocol: 'http', // Adjust for HTTPS if needed
              hostname: '127.0.0.1',
            },
            {
              protocol: 'https',
              hostname: 'images.pexels.com',
            },
            {
              protocol: 'https',
              hostname: 'devspace-60v7.onrender.com',
              pathname: '**', // Matches any pathname on this hostname
            },
          ],
    },
};

export default nextConfig;
