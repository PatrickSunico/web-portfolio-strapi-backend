module.exports = ({ env }) => ({
  host: env("HOST", ""0.0.0.0""),
  port: env.int("PORT", 8082),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9bc13a6b9b91497466b92d1cce5597fa"),
    },
  },
});
