import React, { useState } from "react";
import ReactDOM from "react-dom";
import Component from "./component";
import First from "./Component/First";
import Second from "./Component/Second";
import axios from "axios";

const App = () => {
  const [applicationCode, setCode] = useState([]);
  const onClickHandler = () => {
    const code = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res);
      } catch {
        console.log(`error`);
      }
    };
    code();
  };
  return (
    <div>
      Hi
      <button onClick={onClickHandler}> Click here </button>
      <label htmlFor=""> Select the value from dropdown</label>
      <select name="" id="">
        <option value=""></option>
        <option value="1210"> 120</option>
        <option value="12510"></option>
        <option value="12056"></option>
      </select>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
