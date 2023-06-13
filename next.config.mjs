export function webpack(config) {
  config.externals = [...config.externals, "canvas", "jsdom"];

  return config;
}
