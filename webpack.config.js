
var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
 entry: SRC_DIR + "/app/index.js",
 output: {
   path: DIST_DIR + "/app",
   filename: "bundle.js",
   publicPath: "/app/"
 },
 devServer: {
   inline: true,
 port: 9059
},
mode: 'development',
 module: {
   rules: [
     {
       test: /\.js?/,
       include: SRC_DIR,
       loader: 'babel-loader',
       options: {
         presets: ['react','es2015','stage-2']
       }
     },
     {
       test: /\.scss$/,
       include: SRC_DIR,
       loaders: ['style-loader', 'css-loader', 'sass-loader']
     }
   ]
 }
};

// module.exports = config;