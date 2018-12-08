const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dir = {
  modules: resolve(__dirname, '..', 'node_modules'),
  config: resolve(__dirname),
};

module.exports = {

  mode: 'production',

  entry: {
    index: './src/index.jsx',
  },

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build'),
    publicPath: '/',
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
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // collect CSS from all the css files referenced in the app and
            // put it into a string
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: dir.config,
              },
            },
          },
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
      title: 'Messenger',
      favicon: 'public/favicon.ico',
    }),
  ],
};
