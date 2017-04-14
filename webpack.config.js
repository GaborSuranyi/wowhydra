var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
	  rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
			  use:{
              	loader: 'babel-loader',
				options:{
					presets: ["es2015"],
	    			plugins: ["transform-runtime"]
				}
			}
          }
      ]
  },
  plugins: [
	  new webpack.ExternalsPlugin('commonjs', [
	          'electron'
	      ])
  ],
  resolve: {
  alias: {
    vue: 'vue/dist/vue.js'
  }
},
	target: 'electron-main'
}
