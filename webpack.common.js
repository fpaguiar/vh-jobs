const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlConfig = new HtmlWebPackPlugin({
	template: './index.html',
	filename: 'index.html',
	favicon: './src/assets/images/favicon.ico',
	inject: 'body'
});

const config = {
	entry: './src/app/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		],
		alias: {
			Assets: path.resolve(__dirname, 'src/assets'),
			Components: path.resolve(__dirname, 'src/app/components'),
			Views: path.resolve(__dirname, 'src/app/views'),
			Util: path.resolve(__dirname, 'src/app/util'),
			Actions: path.resolve(__dirname, 'src/app/actions'),
			Reducers: path.resolve(__dirname, 'src/app/reducers')
		}
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules',
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: '/node_modules',
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'resolve-url-loader',
					'sass-loader?sourceMap'
				]
			},
			{
				test: /\.(woff2?|ttf|svg|eot|png|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader?name=[name].[ext]',
			}
		]
	},
	plugins: [
		htmlConfig
	]
};

module.exports = config;