var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src'
  },
  output: {
    path: 'build/',
    filename: 'app.js',
    publicPath: 'build/'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: { warnings: false }
  //   })
  // ]
};
