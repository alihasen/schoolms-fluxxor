var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'html');
var APP_DIR = path.resolve(__dirname, 'html');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: "source-map",
  node: {
    fs: "empty"
  },
  devServer: {
    inline: true,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: [
          APP_DIR
        ],
        loaders: ['babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-decorators-legacy,plugins[]=transform-class-properties,plugins[]=transform-export-extensions'],
      },

      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  resolve: {
    alias: {
    }
  }
}

module.exports = config;
