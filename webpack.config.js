const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|pdf|eot|otf|webp|mp4|svg|ttf|woff|woff2)(\?.*)?$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: "css-loader",
      },
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    //publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    // watchFiles: ["src/**/*"],
    port: 9000,
    // historyApiFallback: { index: "/", disableDotRule: true },
    //host: "localhost",
  },
};
