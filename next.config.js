module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "occ-0-4451-778.1.nflxso.net",
      "www.themoviedb.org",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
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
