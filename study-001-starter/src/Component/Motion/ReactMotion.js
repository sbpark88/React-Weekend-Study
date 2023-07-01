import React, { useState } from "react";
import "./style.scss";

/*
* setter closures 에 값을 넣고 notify 되는 시점(=re-rendering)에 value 가 반영되기 때문에
* 값이 즉시 필요할 경우는 `prefix operator`를 사용한다.
* */
const counterClockWise = (value, setter) => () => setter(--value)
const clockWise = (value, setter) => () => setter(++value)

function ReactMotion(props) {
  let [num, setNum] = useState(0);

  const articleStyle = {
    transform: `rotate(${45 * num}deg)`
  }

  const counterClockWiseHandler = counterClockWise(num, setNum)
  const clockWiseHandler = clockWise(num, setNum)

  return (
    <>
      <button onClick={counterClockWiseHandler}>왼쪽 회전</button>
      <button onClick={clockWiseHandler}>오른쪽 회전</button>

      <article style={articleStyle}></article>
    </>
  );
}

export default ReactMotion;
