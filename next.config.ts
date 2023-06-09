const nextConfig = {
  webpack: (config: {
    module: {
      rules: { test: RegExp; loader: string; options: { mode: string[] } }[];
    };
  }) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return config;
  },
};

module.exports = nextConfig;
