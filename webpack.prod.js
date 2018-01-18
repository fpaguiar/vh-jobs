const merge = require('webpack-merge');
const common = require('./webpack.common');

const { WebpackWarPlugin } = require('webpack-war-plugin');
const WebpackWarPluginConfig = new WebpackWarPlugin();

const config = {
	plugins: [
		WebpackWarPluginConfig
	]
};

module.exports = merge(common, config);