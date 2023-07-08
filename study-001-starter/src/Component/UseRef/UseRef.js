import React, { useRef, useState } from "react";
import "./style.scss";
function UseRef(props) {
  console.log(`Component is rendered.`);
  const [num, setNum] = useState(0);
  const articleRef = useRef(0);
  const prev = () => {
    const newNum = num - 1;
    setNum(newNum);
    articleRef.current.style.transform = `rotate(${45 * newNum}deg)`;
  };
  const next = () => {
    const newNum = num + 1;
    setNum(newNum);
    articleRef.current.style.transform = `rotate(${45 * newNum}deg)`;
  };

  return (
    <>
      <button onClick={prev}>왼쪽으로 회전</button>
      <button onClick={next}>오른쪽으로 회전</button>
      <article ref={articleRef}></article>
    </>
  );
}

export default UseRef;
