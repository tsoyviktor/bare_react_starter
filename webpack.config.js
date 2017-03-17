var path = require('path');

module.exports = {
	module: {
		rules: [
			{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/js')
	},
	devServer: {
	    publicPath: "/",
	    contentBase: "./public",
	    hot: true
	}
};
