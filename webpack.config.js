var path = require('path');
var webpack = require('webpack');

module.exports = {
  // Entry accepts a path or paths in various formats.
  // We're using an object, which is convenient with complex configurations.
  entry: [
    path.join(__dirname, 'js')
  ],

  output: {
    path: path.join(__dirname, 'build'), // often called 'dist'
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        // match all .css files
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: path.join(__dirname, 'css')
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: process.env.HOST,
    port: process.env.PORT,
    historyApiFallback: true,
    inline: true, ///still not sure what this does
    hot: true
  },

  plugins: [
  new webpack.HotModuleReplacementPlugin()
]
};
