const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
	entry: {
		index: './src/index.pug',
		//🌟 Include PUG HTML files in this section
	},
	output: {
		path: path.join(__dirname, 'dist/'),
		publicPath: '/',
		filename: 'assets/js/[name].[contenthash:8].js',
		//🌟 Specify the output filename with a hash for a unique identifier
	},
	plugins: [
		new PugPlugin({
			pretty: true,
			//🌟 Structure and format HTML (applicable only in development mode)
			css: {
				filename: 'assets/css/[name].[contenthash:8].css',
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
				//🌟 Import Pug files
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ['css-loader', 'sass-loader'],
				//🌟 Import Sass files
			},
			{
				//🌟 To use images on pug files:
				test: /\.(png|jpg|jpeg|ico)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/img/[name].[hash:8][ext]',
				},
			},
			{
				//🌟 Implement the following rule for SVG files:
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/img/[name].[hash:8][ext]',
				},
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		watchFiles: {
			paths: ['src/**/*.*', 'assets/scss/**/*.*'],
			//🌟 Activate Hot Module Replacement (HMR) in these directories
			options: {
				usePolling: true,
			},
		},
	},
	stats: 'errors-only',
	//🌟 Optimize the development server for a cleaner run
};
