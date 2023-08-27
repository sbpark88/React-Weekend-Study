import React, { useCallback, useState } from "react";

function UseTransition(props) {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const onButtonClick = useCallback(
    (event) => {
      setCount((prevState) => prevState + 1);
      const largeArray = Array.from(
        { length: 30000 },
        (_, index) => count + index,
      );
      setArray(largeArray);
    },
    [count],
  );

  return (
    <>
      <button onClick={onButtonClick}>{count}</button>
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default UseTransition;

/*
 * Use Transition
 * : 특정 handler 함수에 무거운 연산이 있을 경우, 해당 연산을 분리시켜 rendering 지연을 해소함.
 * */
