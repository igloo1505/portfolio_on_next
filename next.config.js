const withPWA = require("next-pwa");
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
// 	enabled: process.env.ANALYZE === "true",
// });

module.exports = withPWA({
	reactStrictMode: true,
	poweredByHeader: false,
	pwa: {
		dest: "public",
		register: true,
		// disable: process.NODE_ENV === "development",
		// Only useful in development mode, it's handled automatically on deploy
		mode: "production",
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		// ignoreDuringBuilds: true,
	},
	experimental: {
		// outputStandalone: true,
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Important: return the modified config
		return config;
	},
});
