import React, { useState } from "react";
import MainpageLayout from "../components/MainpageLayout";

const Home = () => {
  const [input, setInput] = useState("");
  
  const onSearch = () => {
    //https://api.tvmaze.com/search/shows?q=men

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
      });
  };
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onKeyDown = (ev) => {
    if(ev.keyCode===13){
      onSearch()
    }
    console.log(ev.keyCode);
  };
  return (
    <MainpageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainpageLayout>
  );
};

export default Home;
