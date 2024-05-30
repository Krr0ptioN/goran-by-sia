const TwentyFourHours = 86_400;

module.exports = {
  DATABASE: "mongodb://admin:admin@localhost:27017/security",
  SECRET: "salt-and-peper!!",
  TOKEN_EXPIRY: TwentyFourHours,
};
