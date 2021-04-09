import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import Question from "./Question";
function App() {
  return (
    <div className="question-container">
      <h1>Question and answer about login</h1>
      <div className="all-question">
      {data.map((SingleQuestion) => {
        return (
          <div >
            <Question SingleQuestion={SingleQuestion}></Question>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
