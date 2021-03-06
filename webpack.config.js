const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '')
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html')
  })]
};
