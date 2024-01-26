/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    EMAIL_SOURCE_ADDRESS: "no_reply@bachata-and-more.de",
    EMAIL_RECIPIENT_ADDRESS: "info@bachata-and-more.de",
    EMAIL_API_ENDPOINT:
      "https://19l17oesb8.execute-api.eu-central-1.amazonaws.com/prod/email",
  },
};
