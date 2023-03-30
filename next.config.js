/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_API: "https://manyview-sdk-dev.groopview.co/dev/",
    REACT_APP_CLIENT_KEY: "d46d7c2348b19a77130e",
    REACT_APP_STANDALONE_API:
      "https://manyview-standalone-dev.groopview.co/dev/",
    REACT_APP_FB_APP_ID: "1380763925752957",
    REACT_APP_GG_APP_ID:
      "326519166137-0gkp9s5r0vqgaifm53fkidc9h65ojh7j.apps.googleusercontent.com",
    REACT_APP_APPLE_ID: "com.bma.gvmanyview",
  },
};

module.exports = nextConfig;
