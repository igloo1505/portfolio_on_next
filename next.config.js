const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPWA(
	withBundleAnalyzer({
		reactStrictMode: true,
		pwa: {
			dest: "public",
			register: true,
			disable: process.NODE_ENV === "development",
			// Only useful in development mode, it's handled automatically on deploy
			// mode: "production"
		},
	})
);
