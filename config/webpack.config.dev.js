const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {

  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
});
