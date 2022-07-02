import React, { useState } from "react"; // 항상 가져와줘야 한다.
import Try from './Try';


function getNumbers(){
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i++){
    const chosen = candidate.splice(Math.floor(Math.random()*(9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}


const NumberBaseball = () => {
  const [ result, setResult] = useState('');
  const [ value, setValue ] = useState('');
  const [ answer, setAnswer ] = useState(getNumbers); // useState 자리에는 함수를 넣자.
  const [ tries, setTries ] = useState([]);

const onSubmitForm = (e) => {
    e.preventDefault();
    if(value === answer.join('')){
      setResult('홈런!');
      setTries((prevTries) => {
        return[...prevTries, { tri : value, result: '홈런!' }] 
      });
      setTimeout(() => {
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers()); // 여기선 함수 실행이다. 
        setTries([]);
        setResult('');
      }, 1000);
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v))
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9) {
        setResult( `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`)
        setTimeout(() => {
          alert('게임을 다시 시작합니다!');
          setValue('');
          setAnswer(getNumbers());
          setTries([]);
          setResult('');
        }, 1000);
      } else {
        for (let i = 0; i < 4; i++){
          if(answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [...prevTries, {tri : value, result : `${strike}스트라이크 ${ball}볼`}]
        });
        setValue('');
      }
    }

  };

 const onChangeInput = (e) => {
    setValue(e.target.value)
  };

  return (
    <>{/* 주석 남기기 */}
    <h1>{result}</h1>
    <form onSubmit={onSubmitForm}>
      <input maxLength={4} value={value} onChange={onChangeInput} />
    </form>
    <div>시도: {tries.length}</div>
    <ul>
      {tries.map((v, i) => {
        return (
          <Try key={`${i + 1}차 시도`} tryInfo={v} />
        );
      })}
    </ul>
    </>
  )
}


export default NumberBaseball; // import NumberBaseball / 다른경우는 import { hello } 이런식으로 가져온다. 왜냐하면 default 가 없으니.
