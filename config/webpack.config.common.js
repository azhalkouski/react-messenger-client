const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = {
  modules: resolve(__dirname, '..', 'node_modules'),
};

module.exports = {

  entry: {
    index: './src/index.jsx',
  },

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: dir.modules,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: dir.modules,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
      title: 'Messenger',
    }),
  ],
};
