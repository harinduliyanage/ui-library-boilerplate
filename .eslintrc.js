module.exports = {
	extends: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	plugins: ["@typescript-eslint"],
	settings: {
		react: {
			version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
	// Fine tune rules
	rules: {
		"@typescript-eslint/no-var-requires": 0,
	},
};
