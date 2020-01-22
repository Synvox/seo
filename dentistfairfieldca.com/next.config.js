const glob = require("glob");

module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: async function(defaultRoutes) {
    const routes = { ...defaultRoutes };
    const blogs = glob.sync("src/posts/*.md");

    const blogSlugs = blogs.map(file =>
      file
        .split("/")[2]
        .replace(/ /g, "-")
        .slice(0, -3)
        .trim()
    );

    blogSlugs.forEach(blog => {
      routes[`/blog/${blog}`] = { page: "/blog/[slug]", query: { slug: blog } };
    });

    return routes;
  }
};
