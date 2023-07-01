import React, { Component } from "react";

class Popup extends Component {
  const;
  popStyle = {
    width: 600,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#555",
    fontSize: 30,
    color: "#fff",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  render() {
    return <aside style={this.popStyle}>Popup</aside>;
  }
}

export default Popup;
