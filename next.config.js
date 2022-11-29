/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

import withVideos from 'next-videos';

export default {
	nextConfig,
	withVideos: withVideos(),
};
