const path                 = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/assets/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'src/'),
    filename: 'index.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
};
