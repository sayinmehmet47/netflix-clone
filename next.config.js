module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/gr-en",
        permanent: true,
      },
    ];
  },
};
