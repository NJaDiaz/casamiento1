/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/casamiento1',
    output: 'export',
    distDir: 'dist',
    images:{
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
