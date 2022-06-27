const path = require('path');

module.exports = {
  name: 'wordrelay-setting', // 이건 내가 맘대로 정해주는 이름
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // 빠르게 하겠다.
  resolve: {
      extensions: ['.js', '.jsx'], // 알아서 확장자 찾아서 찾아준다.
  },

  entry: {
      app: ['./client.jsx', './GuGudan.jsx'], // 근데 client 에서 이미 WordRealy를 가져오고 있으니깐, 예는 적을 필요가 없다.
  }, // 입력 // 위에 확장자도 resolve 로 정하면 지워줘도 상관없다.

  module: {
      rules: [{
          test: /\.jsx?$/, //js, jsx 파일에 룰을 적용하겠다.
          loader: 'babel-loader', // 바벨 적용
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
          }, 
      }],
  },

  output: {
      path: path.join(__dirname, 'dist'), // 경로를 알아서 합쳐준다. 현재 폴더(lecture)에서 그 안 dist 를 가져온다.
      filename: 'app.js', // 원하는 파일
  }, // 출력


};