const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = {
	devServer: {
		historyApiFallback: true,
		proxy: {
			'/api/**': {
				target: 'http://youcanhom.eastus.cloudapp.azure.com',	
				secure: false,
			}
		}
	},
	devtool: 'source-map',
};

module.exports = merge(common, config);