const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  // entry: {
  //     styles: "./src/styles.scss"
  // },
  // output: {
  //     filename: '[name].js',
  //     path: path.resolve(__dirname, 'dist')
  // },
  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      // },
      // {
      //   test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[ext]',
      //     },
      //   },
      // },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'css/styles.css'
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
};