var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "client/src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./main.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "client/src/",
    filename: "App.test.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

// var config = {
//    entry: './main.js',
//
//    output: {
//       path:'public',
//       filename: 'index.js',
//       publicPath: '/'
//    },
//
//    devServer: {
//       inline: true,
//       port: 8080
//    },
//
//    module: {
//       loaders: [
//          {
//             test: /\.jsx?$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//
//             query: {
//                presets: ['es2015', 'react']
//             }
//          }
//       ]
//    }
// }
//
// module.exports = config;
