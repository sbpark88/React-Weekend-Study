import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

function ReactFontAwesome(props) {
  return <>
    <FontAwesomeIcon icon={faBars} />
    <FontAwesomeIcon icon={faTwitter} />
  </>;
}

export default ReactFontAwesome;
