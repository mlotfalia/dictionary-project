import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Phonetic(props) {
  const element = <FontAwesomeIcon icon="fa-solid fa-volume-high" />;
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio}>{element}</a>

        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
