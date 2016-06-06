var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ['babel-polyfill', './main.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin()
  ],
  devServer: {
    inline:true,
    port: 9002
  }
}
