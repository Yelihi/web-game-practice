import React from 'react';
import ReactDOM from 'react-dom/client'; //모듈에서 불러올 수가 있다.


// 이렇게 쪼갠 컴포넌트를 가져올 수 있다. 
import RSP from './RSP';

//jsx 와 js의 차이점은 사실 한글자의 추가로 그냥 리엑트 전용 파일이구나 정도를 어필할 수 있다.
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RSP />);