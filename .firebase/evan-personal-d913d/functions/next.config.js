// next.config.js
var withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js"
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});
var nextConfig = {
  // any configs you need
};
module.exports = withNextra(nextConfig);
