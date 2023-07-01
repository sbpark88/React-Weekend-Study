import "./css/style.scss";
import { useState } from "react";

// 1. ['red', 'green', 'blue'] 라는 배열 정보값을 컴포넌트 내부에 생성하고 해당 배열 색상값으로 li element ㄹㅡㄹ 동적 생성
// 2. 버튼 클릭시 세 번째 li 의 색상만 aqua 로 변경

const App = () => {
  const liStyle = { marginLeft: "30px", fontSize: "20px" };
  const [liArr, setLiArr] = useState(["red", "green", "blue"]);
  const handleClick = () =>
    setLiArr((old) => {
      const newLiArr = [...old];
      newLiArr[2] = "aqua";
      setLiArr(newLiArr);
    });

  return (
    <>
      <button onClick={handleClick}>아쿠아 색상으로</button>
      <ul style={liStyle}>
        {liArr.map((color) => (
          <li key={color} style={{ color: color }}>
            {color}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
