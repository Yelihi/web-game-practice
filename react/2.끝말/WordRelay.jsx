const React = require("react"); // 항상 가져와줘야 한다.
const { useState, useRef } = React; // 컴포넌트 대신 useState, useRef

const WordRelay = () => {
  const [word, setWord] = useState("제로초"); // 개별로 바꿔준다.
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChange = (e) => {
    setValue({ value: e.target.value });
  };

  //컨트롤드 인풋을 써야할것이다. 언컨트롤드 인풋이 있는데, 사용 가능한 조건은 input의 value가 onSubmit 함수에만 쓰일 경우다. 이때는 value를 
  //생략하고 e.target.children.(id 값).value 로 접근하면 된다.
  //
  return (
    <>
      <h1>{word}</h1>
      <form onSubmit={onSubmit}>
        <input ref={useRef} value={value} onChange={onChange} /> 
        <button>클릭</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay; // 요것도 붙여주자. 쪼갠 컴포넌트를 밖에서도 사용할 수 있게 해주는것.
