const withPwa = require("next-pwa");

const isDevelopment = process.env.NODE_ENV === "development";
module.exports = withPwa({
  pwa: {
    disable: isDevelopment,
    dest: "public",
  },
});
