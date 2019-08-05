const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }
];

module.exports = {
  target: "web",
  mode: "development",
  entry: {
    home: "./src/ts/shared/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./src",
    port: 5000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
