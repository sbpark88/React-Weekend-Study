import "./css/style.scss";
import Popup from "./Popup";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState({
    color: "blue",
  });

  return (
    <>
      <main>
        <h1 style={style}>메인 콘텐츠</h1>
        <sectoin>
          메인 콘텐츠 색상 변경 :
          <button onClick={(e) => setStyle({ color: e.target.innerText })}>
            blue
          </button>
          <button onClick={(e) => setStyle({ color: e.target.innerText })}>
            red
          </button>
        </sectoin>
        <section>
          Popup 관리 :
          <button onClick={() => setVisible(true)}>Open Popup</button>
        </section>
      </main>
      {visible && <Popup setVisible={setVisible} />}
    </>
  );
};

export default App;
