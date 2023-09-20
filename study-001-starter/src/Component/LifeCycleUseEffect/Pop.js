import { useEffect, useState } from "react";

function Pop() {
  const popStyle = {
    width: 400,
    height: 200,
    backgroundColor: "#333",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  };

  const [num, setNum] = useState(0);

  // 팝업이 열리면 스크롤 방지, 닫히면 다시 스크롤 가능하도록
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <aside style={popStyle}>
      <button onClick={() => setNum(num - 1)}>감소</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>증가</button>
    </aside>
  );
}

export default Pop;
