const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: './toukenRanbu/RegimentBattle/js/2019-summer-vue.js',

	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	}
}
