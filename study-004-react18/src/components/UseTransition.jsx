import React, { useState } from "react";

function UseTransition(props) {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  return <></>;
}

export default UseTransition;

/*
 * Use Transition
 * : 특정 handler 함수에 무거운 연산이 있을 경우, 해당 연산을 분리시켜 rendering 지연을 해소함.
 * */
