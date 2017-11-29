const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ENV, IS_PRODUCTION, APP_VERSION, IS_DEV, dir } = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options = {}) {
  return {
    context: dir(),
    resolve: {
      extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
      modules: [
        'node_modules',
        dir('src'),
        dir('demo')
      ]
    },
    performance: {
      hints: false
    },
    output: {
      path: dir('dist'),
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg|gif)$/,
          loader: 'url-loader',
          query: {
            limit: '100000'
          }
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        },
        {
          test: /\.css/,
<<<<<<< HEAD
          loaders: [
            ExtractTextPlugin.extract({
              fallbackLoader: "style-loader",
              loader: 'css-loader'
            }),
            'to-string-loader',
            'css-loader',
            'postcss-loader?sourceMap',
=======
          use: [
            ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader'
            }),
            { loader: 'to-string-loader' }, 
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
          ]
        },
        {
          test: /\.scss$/,
<<<<<<< HEAD
          loaders: [
=======
          use: [
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
            ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader'
            }),
<<<<<<< HEAD
            'to-string-loader',
            'css-loader',
            'postcss-loader?sourceMap',
            'sass-loader?sourceMap'
=======
            { loader: 'to-string-loader' }, 
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { 
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
          ]
        }
      ]
    },
    plugins: [
<<<<<<< HEAD
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
      }),
=======
      new ExtractTextPlugin('[name].css'),
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        ENV,
        IS_PRODUCTION,
        APP_VERSION,
        IS_DEV,
        HMR: options.HMR
      }),
      new CopyWebpackPlugin([
        { from: 'assets', to: 'assets' }
      ]),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: dir(),
          tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
          },
          postcss: function() {
            return [ autoprefixer ];
          }
        }
      })
    ]
  };

};
