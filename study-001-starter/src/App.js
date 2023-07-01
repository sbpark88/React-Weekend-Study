import "./css/style.scss";
import Popup from "./Popup";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <main>
        <h1 onClick={() => setVisible((old) => !old)}>메인 콘텐츠</h1>
        {visible && <Popup />}
      </main>
    </>
  );
};

export default App;
