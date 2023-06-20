export function webpack(config) {
  config.externals = [...config.externals, "canvas", "jsdom"];

  return config;
}
let assetPrefix = "";
let basePath = "";

var output = "export";

if (process.env.NODE_ENV !== "production") {
  output = undefined;
}

export default {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output,
  images: {
    unoptimized: true,
  },
};
