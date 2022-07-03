import React, { useState, useEffect, useRef } from 'react';

// 컴포넌트의 일대기
// (클래스의 경우)... constructor -> render -> ref -> componentDidMount -> {setState / props 바뀔때 실행}
// -> render -> componentDidUpdate 
// (부모가 나를 버릴때) -> componentWillUnmount -> 소멸



//                         result,  imgCoord, score
//  componentDidMount
//  componentDidUpdate
//  componentWillUnmount

// 3*3 표가 있다고 가정한다면, class 에서는 가로로 작동한다 생각하고, hooks 에서는 세로로 작동한다 생각을 하자. 그러니깐, hooks는 result 하나에만 3가지를 
// 다 작동시키는 것이고, 반대로 class 는 DidMount 가 3가지를 다 담당한다고 생각하면 된다. 

// useEffect(() => {
//    setImgCoord();
//    setScore();
// }, [imgCoord, score]);
// useEffect(() => {
//    setResult();
// }, [result]);
// 이런식으로 각각 따로따로 적용시킨다. 





const rspCoords = {
  바위 : '0',
  가위 : '-142px',
  보 : '-284px',
}

const score = {
  가위 : 1,
  바위 : 0,
  보 : -1,
}

const computerChoice = (imgCoords) => {
  return Object.entries(rspCoords).find(function(v){
    return v[1] === imgCoords;
  })[0];
};

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoords, setImgCoords] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => { // componentDidMount, componentDidUpdate (1대1 대응은 아님)
    interval.current = setInterval(changeHand, 100); 
    return (() => { // componentWillUnmount 역할
      clearInterval(interval.current);
    })
  }, [imgCoords]) // 배열안에 요소가 변화가 있다면, useEffect 를 발동시킬것이다. 즉 아무것도 안넣으면 작동 한번만 하겠다는것임.

  const changeHand = () => {
    if(imgCoords === rspCoords.바위){
      setImgCoords(rspCoords.가위);
    }else if(imgCoords === rspCoords.가위){
      setImgCoords(rspCoords.보);
    }else if(imgCoords === rspCoords.보){
      setImgCoords(rspCoords.바위);
    }
  };

  const onClickBtn = (choice) => () => { //
    clearInterval(interval.current);
    const myScore = score[choice];
    const cpuScore = score[computerChoice(imgCoords)];
    const diff = myScore - cpuScore;
    if(diff === 0){
      setResult('비겼습니다.')
    }else if([ -1, 2].includes(diff)) {
      setResult('이겼습니다.');
      setScore((prevScore) => {
        return {
          score: prevScore + 1,
        }
      })
    }else{
      setResult('졌습니다.');
      setScore((prevScore) => prevScore - 1 );
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 50);
    }, 2000);
  };


  return (
    <>
    <div id="computer" style={{ background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0` }} />
    <div>
      <button id='rock' className='btn' onClick={onClickBtn('바위')}>바위</button>
      <button id='scissor' className='btn' onClick={onClickBtn('가위')}>가위</button>
      <button id='paper' className='btn' onClick={onClickBtn('보')}>보</button>
    </div>
    <div>{result}</div>
    <div>현재 {score}점</div>
  </>
  )

}


export default RSP;