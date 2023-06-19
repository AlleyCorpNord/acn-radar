export function webpack(config) {
  config.externals = [...config.externals, "canvas", "jsdom"];

  return config;
}
let assetPrefix = "";
let basePath = "";

export default {
  assetPrefix: assetPrefix,
  basePath: basePath,
  // output: "export",
  images: {
    unoptimized: true,
  },
};
