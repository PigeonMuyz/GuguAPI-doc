const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/GuguAPI-doc' : '',
    images: {
        unoptimized: true,
    },
};

module.exports = withNextra(nextConfig);
