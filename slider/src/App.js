import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight, FaChevronCircleRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  let timer;
  
  function handleLeftButtonClik() {
    if (index > 0 && index <= data.length - 1) {
      // clearTimeout(timer);
      setIndex((prevValue) => prevValue - 1);
    }
  }
  function handleRightButtonClik() {
    if (index >= 0 && index < data.length - 1) {
      // clearTimeout(timer);
      setIndex((prevValue) => prevValue + 1);
    }
  }

  useEffect(() => {
    timer = setTimeout(() => {
      if (index >= 0 && index < data.length - 1) {
        setIndex(index + 1);
      }
      if (index == data.length - 1) {
        setIndex(0);
      }
    }, 2000);
    /*Click garda ni index change hune vo so hamle timer lai stop garyo so that index do not conflict.
    Inside click handler i can stop the timer and then change the index. As index changes the useEffect hook executes
    since we have given the dependencies of [index]
    */
    return ()=>clearTimeout(timer);
  }, [index]);
  return (
    <div className="slider">
      <h1>/Review</h1>
      <div className="slider-controller">
        <div className="left-button">
          <button onClick={handleLeftButtonClik}>
            <FiChevronLeft />
          </button>
        </div>
        <div className="details">
          <img src={data[index].image} alt="" />
          <h2> {data[index].name}</h2>
          <h3> {data[index].title}</h3>
          <p> {data[index].quote}</p>
          <h5><FaQuoteRight /></h5>
        </div>
        <div className="right-button">
          <button onClick={handleRightButtonClik}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
