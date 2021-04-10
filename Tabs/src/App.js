import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [experience, setExperience] = useState();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setExperience([...data]);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  if (!experience) return null;
  return (
    <div className="experience-list">
      <h1>Experience</h1>
      <div className="singleExperence">
        <div className="selectPerson">
          <button onClick={() => setIndex(0)}>{experience[0].company}</button>
          <button onClick={() => setIndex(1)}>{experience[1].company}</button>
          <button onClick={() => setIndex(2)}>{experience[2].company}</button>
        </div>
        <div className="info">
          <p> {experience[index].title}</p>
          <h5>{experience[index].dates}</h5>
          <p>{experience[index].duties}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
