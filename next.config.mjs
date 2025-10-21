/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bacheca.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;