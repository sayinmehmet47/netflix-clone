module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["occ-0-4451-778.1.nflxso.net"],
  },
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
