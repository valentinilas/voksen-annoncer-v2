/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            port: '',
            pathname: '/wo0srdcz6/**',
          },
          {
            protocol: 'https',
            hostname: 'ndinpokdjajhdzzpbzic.supabase.co',
            port: '',
            pathname: '/storage/**',
          },
          {
            protocol: 'https',
            hostname: 'cms.voksen-annoncer.com', 
            port: '',
            pathname: '/api/media/**',  // Assuming your images are in the '/media' path or adjust it as needed
          },],
      },
};

export default nextConfig;
