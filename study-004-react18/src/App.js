import { useCallback, useState } from "react";

function App() {
  console.log("render");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const returnPromise = useCallback(
    () => new Promise((res) => setTimeout(res, 500)),
    [],
  );
  const onButtonClick = useCallback(
    async (event) => {
      await returnPromise();

      setCount1(count1 + 1);
      setCount2(count2 + 2);
    },
    [count1, count2, returnPromise],
  );

  return (
    <div className="App">
      <button onClick={onButtonClick}>Button</button>
      <h1>count1 : {count1}</h1>
      <h1>count2 : {count2}</h1>
    </div>
  );
}

export default App;

/*
 * Automatic Batching
 * : handler 함수 안쪽에서 복수의 state 가 변경될 때 해당 변경사항들을 모아 한 번만 re-rendering
 * => 기존 17 버전에서 비동기 함수 안쪽에 복수의 state 가 변경되는 경우 automatic batching 이
 *    작동하지 않아 state 가 변경되는 갯수만큼 re-rendering 이 발생. 18 버전에서는 해당 문제를 해결함.
 *
 * React 17 : automatic batching 이 synchronous 에서만 작동.
 * React 18 : automatic batching 이 synchronous, asynchronous 모두에서 작동.
 * */
