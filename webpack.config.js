const path = require("path");
// const entryPath = "App";

module.exports = {
  entry: `./Project/app.js`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `Project/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `Project`),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
