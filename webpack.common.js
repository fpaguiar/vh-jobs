const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlConfig = new HtmlWebPackPlugin({
	template: './index.html',
	filename: 'index.html',
	inject: 'body'
});

const config = {
	entry: './src/app/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules',
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		htmlConfig
	]
};

module.exports = config;