export function webpack(config) {
  config.externals = [...config.externals, "canvas", "jsdom"];

  return config;
}

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

export default {
  assetPrefix: assetPrefix,
  basePath: basePath,
  // output: "export",
};
