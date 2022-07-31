const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("inline-chunk-html-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: "webpack App",
      content: "Testing by using webpack config file",
      filename: "index.html",
      template: "src/index.html",
      scriptLoading: "module"
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/.*/]),
  ],
};
