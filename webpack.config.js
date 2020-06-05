const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/browserPubSub.js',
  output: {
    path: path.resolve('lib'),
    filename: 'browserPubSub.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}
