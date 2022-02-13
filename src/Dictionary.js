import "./Dictionary.css";

import React, { useState } from "react";

import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    return response.data[0];
  }
  function search(event) {
    alert(`Searching for ${keyword}`);
    //documentation    https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus="true" onChange={handleKeyword} />
      </form>
    </div>
  );
}
