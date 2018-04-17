module.exports = {
  entry: 'src/assets/js/index.js',
  output: '_site/assets/index.js',
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
