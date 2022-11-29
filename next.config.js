/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	'images.unoptimized': true,
};

module.exports = nextConfig;

const withVideos = require('next-videos');

module.exports = withVideos();
