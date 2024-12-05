/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"]
        })

        return config;
    },
    images: {
        remotePatterns: [
            {
                hostname: "replicate.delivery",
                protocol: "https",
            },
        ],
    },

    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    }
};

export default nextConfig;
