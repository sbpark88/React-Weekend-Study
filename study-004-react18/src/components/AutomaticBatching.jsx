import React, { useCallback, useState } from "react";
import { flushSync } from "react-dom";

function AutomaticBatching(props) {
  console.log("render");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const returnPromise = useCallback(
    () => new Promise((res) => setTimeout(res, 500)),
    [],
  );
  const onButtonClick = useCallback(
    async (event) => {
      await returnPromise();

      setCount1((prevState) => prevState + 1);
      setCount2((prevState) => prevState + 2);

      // 비동기 코드 안에서 강제로 automatic batching 풀기
      flushSync(() => setCount3((prevState) => prevState + 3));
      // setTimeout(() => setCount3(prevState => prevState + 3), 0);
    },
    [count1, count2, count3, returnPromise],
  );

  return (
    <>
      <button onClick={onButtonClick}>Button</button>
      <h1>count1 : {count1}</h1>
      <h1>count2 : {count2}</h1>
      <h1>count3 : {count3}</h1>
    </>
  );
}

export default AutomaticBatching;

/*
 * Automatic Batching
 * : handler 함수 안쪽에서 복수의 state 가 변경될 때 해당 변경사항들을 모아 한 번만 re-rendering
 * => 기존 17 버전에서 비동기 함수 안쪽에 복수의 state 가 변경되는 경우 automatic batching 이
 *    작동하지 않아 state 가 변경되는 갯수만큼 re-rendering 이 발생. 18 버전에서는 해당 문제를 해결함.
 *
 * React 17 : automatic batching 이 synchronous 에서만 작동.
 * React 18 : automatic batching 이 synchronous, asynchronous 모두에서 작동.
 *            (비동기 코드 안에 또 다른 비동기, 즉, 2-depth 까지 작동하지는 않음.)
 * */
