// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
		// Important: return the modified config
		config.module.rules.push({
			test: /\.node/,
			use: "raw-loader",
		});
		return config;
	},
};

module.exports = nextConfig;
