'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "index.js"
  },
  devServer:{
    port:3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.styl/,
        include: [/src/],
        use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: [
                  'css-loader',
                  'stylus-loader'
             ]
        })
      },
      {
        test: /\.jpg|png|gif|bmp|jpeg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:10240,
              name:"[name].[ext]",
              esModule: false
            }
          }
        ]
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.styl'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new ExtractTextPlugin({
        filename:'[name].[hash].css',//随机名称
        allChunks:true
    }),
    new VueLoaderPlugin(),
  ]
}