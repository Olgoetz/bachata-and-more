/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

const withVideos = require('next-videos');

module.exports = {
	nextConfig,
	withVideos: withVideos(),
};
