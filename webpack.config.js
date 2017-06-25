module.exports = {
  context: __dirname,
  entry: {
    javascript: "./js/app.js",
    html: "./index.html",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ]
  }
};
