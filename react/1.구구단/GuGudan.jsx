const React = require('react'); // 항상 가져와줘야 한다.
const { useState, useRef } = React;

// 함수 컴퍼넌트에도 state 와 ref 기능을 넣어준것이 hooks 다.
const GuGudan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9)); // 컴퍼넌트 안에 있어야 한다.
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null); // 얘로 돔에 접근

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) { // 다만 밑에 각각으로 랜더링이 이루어지는게 아니라 비동기로서 한번에 일어난다. 
      setResult(`정답! 답은 ${value}`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus(); // 요기에다가 밑에 dom에 접근했던거에서 실제 주고싶은 효과를 추가해주면 된다.
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus(); // 형식은 이렇게 
    };
  };


  // 렌더링을 할 때 클래스와 달리 전체가 다 실행되서, 메서드도 어쩔수 없이 다시 실행된다. 
  // 여기서 html 생성 시 class, for 사용이 안되니 밑에껄로 대체하자
  return ( // return 에는 태그가 하나가 와야한다. 따라서 하나의 태그로 묶어주어야 한다.
    <React.Fragment>
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
    </React.Fragment>
  );
};




module.exports = GuGudan;
