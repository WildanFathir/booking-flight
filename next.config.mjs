/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push('@node-rs/bcrypt');
        return config;
    }
};

export default nextConfig;
