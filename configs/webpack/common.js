// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	context: resolve(__dirname, "../../src"),
	module: {
		rules: [
			{
				test: [/\.jsx?$/, /\.tsx?$/],
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader",
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: "../public/index.html.ejs" })],
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
	performance: {
		hints: false,
	},
};
