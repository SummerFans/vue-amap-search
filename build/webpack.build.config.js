var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './src/components/amapsearch/search.vue',
  output: {
    path: resolve('dist/lib'),
    // publicPath: '/dist',
    filename: 'main.js',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              // transpileOnly: true
            }
          }]
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            esModule: true,
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader'
              }),
              less: ExtractTextPlugin.extract({
                use: 'css-loader!less-loader',
                fallback: 'vue-style-loader'
              }),
            }
          }
        }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]

      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  externals: {
    "vue": "Vue"
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 3030
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
