module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f7512b29b9b0a8b2feb3e32ff237c4d'),
  },
});
