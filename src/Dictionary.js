import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <section className="Dictionary">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control rounded-pill"
                type="search"
                onChange={handleKeywordChange}
                //placeholder="Sunset"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn rounded-pill"
              />
            </div>
          </div>
        </form>
        <div className="hints">
          <span>Suggested words:</span> summer, sunset, wine, book...
        </div>
        <Results results={results} />
      </section>
    );
  } else {
    load();
    return "Loading...";
  }
}
