/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/headers",
                destination: "/api/headers",
            },
            {
                source: "/openrouter/:path*",
                destination: "/api/openrouter/:path*",
            },
            {
                source: "/openai/:path*",
                destination: "/api/openai/:path*",
            },
            {
                source: "/anthropic/:path*",
                destination: "/api/anthropic/:path*",
            },
            {
                source: "/gemini/:path*",
                destination: "/api/gemini/:path*",
            },
            {
                source: "/groq/:path*",
                destination: "/api/groq/:path*",
            },
            {
                source: "/v1/:path*",
                destination: "/api/v1/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
