const path = require('path');

module.exports = {
  mode: 'development',
  entry: './front/src/index.js',
  output: {
    path: __dirname,
    filename: './back/public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-react',
            '@babel/env'
          ],
          "plugins": [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
          ]
        }
      }
    ]
  },
  devtool: 'source-map',
  watchOptions: {
    poll: true
  }
};