export function webpack(config) {
  config.externals = [...config.externals, "canvas", "jsdom"];

  return config;
}

export const basePath = "/acn-radar";
export const output = "export";
export const experimental = {
  appDir: true,
};
