import React from "react";

function Popup({ setVisible }) {
  const popStyle = {
    width: 600,
    height: 300,
    display: "flex",
    justifyContent: "end",
    alignItems: "start",
    backgroundColor: "#555",
    fontSize: 30,
    color: "#fff",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const closePopupStyle = {
    position: "absolute",
    top: "20px",
    right: "30px",
  };
  return (
    <aside style={popStyle}>
      <span onClick={() => setVisible(false)} style={closePopupStyle}>
        Close Popup
      </span>
    </aside>
  );
}

export default Popup;
