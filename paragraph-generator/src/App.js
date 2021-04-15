import React, { useState } from "react";
import data from "./data";
function App() {
  var [value, setValue] = useState(1);
  var [textToShow, setTextToShow] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (value === 0) {
      value = 1;
    }
    if (value > 8) {
      value = 8;
    }
    setTextToShow(data.slice(0, value));
    
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="">Paragraph</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Generate</button>
      </form>
      <div className="paragraph">
        {textToShow.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
