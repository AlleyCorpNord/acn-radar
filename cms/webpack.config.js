const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/PreviewBlip.tsx"),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "preview-template.js",
    path: path.resolve(__dirname, "../public/admin"),
  },
};
