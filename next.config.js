/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	env: {
		EMAIL_SOURCE_ADDRESS: 'no_reply@bachata-and-more.de',
		EMAIL_RECIPIENT_ADDRESSES: ['oli@bachata-and-more.de'],
		EMAIL_API_ENDPOINT:
			'https://19l17oesb8.execute-api.eu-central-1.amazonaws.com/prod/email',
	},
};
