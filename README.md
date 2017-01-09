## NPM 모듈
- `--save` : package.json 에 설치 정보를 저장한다. 이렇게 하면 node_modules 는 버전 관리 하지않고
소스코드를 받아온 후 `$ npm install` 만 하면 모든 모듈을 다운받을 수 있다.
- `--save-dev` : 개발 전용 모듈 설정 정보. package.json 의 `devDependencies`에 저장되며, 개발인 경우만 사용된다.

$ npm install --save-dev babel-loader babel-core babel-preset-es2015

$ npm install --save-dev eslint eslint-loader

$ npm install --save express

<br>

## NPM scripts 설명 (package.json)

### $ npm run build

> "build": "babel server --out-dir build --presets=es2015 && webpack"

- `babel` : cli 옵션으로 babel 컴파일 결과를 콘솔에 노출. ( $ babel server 는 ./server 의 내용을 컴파일 한다는 의미 )
	- `--presets` : bable 컴파일 시 어떤 버전으로 할지 결정
	--presets=es2015 로 할시 es5 결과가 콘솔에 노출
	- `--out-dir` : 콘솔에 노출하지 않고 파일 형태로 받을 시 저장되는 위치
	--out-dir build 로 할시 ./build 밑에 같은 파일명으로 저장


### $ npm run dev

> "dev": "cross-env NODE_ENV=dev nodemon --exec babel-node --presets=es2015 ./server/app.js --watch server"

- `cross-env` : 각 Os 마다 환경변수 값을 설정. 각 OS 별로 환경 변수 설정하는 방법이 다르기 때문에 사용 https://www.npmjs.com/package/cross-env
- `nodemon ` : node.js 코드 변경 시 자동 시작. https://www.npmjs.com/package/nodemon
	- `--exec` : node.js 가 아닌 script를 사용시 쓰는 옵션. https://www.npmjs.com/package/nodemon#running-non-node-scripts
		- `babel-node` : 운영에서의 사용은 지양! 불필요하게 무겁기 때문에 https://babeljs.io/docs/usage/cli/#babel-node
			- `--presets` : es2015 사용. --presets=es2015
	- `--watch` : nodemon 은 기본적으로 전체 디렉토리를 모니터링. 특정 디렉토리만 모니터링하고 재시작하고 싶을 때 사용 https://www.npmjs.com/package/nodemon#monitoring-multiple-directories
