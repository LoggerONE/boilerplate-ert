const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: {react : './apps/react/app.tsx'},
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.(js|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,        
            use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ],
          }           
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: './',
  },
  plugins: [    
    new HtmlWebpackPlugin(),
  ],
};