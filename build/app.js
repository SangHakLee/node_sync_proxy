'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var devPort = 3000;
var prodPort = 8080;

if (process.env.NODE_ENV === 'dev') {
	var webpackConfig = require('../webpack.dev.config');

	var compiler = (0, _webpack2.default)(webpackConfig);
	var devServer = new _webpackDevServer2.default(compiler, webpackConfig.devserver);

	devServer.listen(devPort, function () {
		console.log('[DEV] Server on port ' + devPort);
	});
} // dev 가 아니면 운영모드이고 if 블럭 안에 내용 실행하지 않기 때문에 default webpack 사용

app.use('/', _express2.default.static(_path2.default.join(__dirname, 'public')));

app.listen(prodPort, function () {
	console.log('[DEV] Server on port ' + prodPort);
});