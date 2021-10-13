module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: [
        `experiences`,
        `portfolios`,
        {
          mode: "about",
          singleType: true,
        },
        {
          mode: "hero",
          singleType: true,
        },
      ],
    },
  },
});
