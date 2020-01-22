const images = require("remark-images");
const emoji = require("remark-emoji");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "mdx"]
});
