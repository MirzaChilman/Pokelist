const withPwa = require("next-pwa");

const isDevelopment = process.env.NODE_ENV === "development";
module.exports =
  !isDevelopment ?
  withPwa({
    pwa: {
      dest: public,
    },
  }) : {};
