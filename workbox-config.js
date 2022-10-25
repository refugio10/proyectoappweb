module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,jpg,png,json,css,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};