// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
			},
			{
				protocol: "https",
				hostname: "media.discordapp.net",
			},
			{
				protocol: "https",
				hostname: "kennekt-bucket.s3.us-west-1.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "i.imgur.com",
			},
			{
				protocol: "https",
				hostname: "media.tenor.com",
			},
			{
				protocol: "https",
				hostname: "user-images.githubusercontent.com",
			},
		],
	},
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
