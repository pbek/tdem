const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	webpack: (config, { dev, vendor }) => {
		// Add Vue to file extensions
		config.resolve.extensions = ['.js', '.json', '.vue'];

		// Set custom entry points
		config.entry = {
			'js/content': './js/content.js',
			'options/options': './options/options.js'
		};

		// Add custom module rules
		config.module.rules.push(
			{
				test: /\.vue$/,
				use: ['vue-loader'],
			},
			{
				test: /\.css$/,
				use: [
					{
					  loader: MiniCssExtractPlugin.loader,
					},
					"css-loader"
				  ]
			}
		);

		// Add custom plugins
		config.plugins.push(new VueLoaderPlugin());
		config.plugins.push(new MiniCssExtractPlugin());

		return config;
	}
};
