import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const app = express();

const devPort = 3000;
const prodPort = 8080;

app.use('/', express.static(path.join(__dirname, 'public')));

if ( process.env.NODE_ENV === 'dev' ) { // dev 가 아니면 운영모드이고 if 블럭 안에 내용 실행하지 않기 때문에 default webpack 사용
	const webpackConfig = require('../webpack.dev.config');

	let compiler = webpack(webpackConfig);
	let devServer = new WebpackDevServer(compiler, webpackConfig.devserver);

	devServer.listen(devPort, () => {
		console.log(`[DEV] Server on port ${devPort}`);
	});
} else {
	app.listen(prodPort, () => {
		console.log(`[DEV] Server on port ${prodPort}`);
	});
}
