import React, { useState } from "react";
import Pop from "./Pop";
import "./style.scss";

function LifeCycleUseEffect(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>팝업 토글</button>

      {open && <Pop />}
    </>
  );
}

export default LifeCycleUseEffect;
