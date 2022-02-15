import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button className="btn">
          <i className="fa-solid fa-volume-high">
            <FontAwesomeIcon icon="fa-solid fa-volume-high" />
          </i>
        </button>

        <a href={props.phonetic.audio}>Listen</a>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
