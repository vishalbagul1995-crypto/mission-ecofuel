/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.missionecofuel.org',
          },
        ],
        destination: 'https://missionecofuel.org/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
