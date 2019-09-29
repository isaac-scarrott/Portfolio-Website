const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rules = [{
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
  },
  {
    test: /\.css$/,
    use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it uses publicPath in webpackOptions.output
          publicPath: '../',
          hmr: process.env.NODE_ENV === 'development',
        },
      },
      'css-loader',
    ],
  },
];

module.exports = {
  target: "web",
  mode: "development",
  entry: {
    home: "./src/ts/index.tsx"
  },
  output: {
    path: path.resolve('./', "build"),
    filename: "bundle.js"
  },
  module: {
    rules
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./src",
    port: 5000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  ]
};