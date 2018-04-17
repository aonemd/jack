const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/assets/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'src/assets'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
