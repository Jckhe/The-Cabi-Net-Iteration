const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'production',
  devServer: {
    port: 8080,
    host: 'localhost',
    proxy: {
      '/spice/**': {
      target: 'http://localhost:8080/',
      router: () => 'http://localhost:3000',
      secure: false,
      changeOrigin: true
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader"
        ],
    }
    ]
  }
}
