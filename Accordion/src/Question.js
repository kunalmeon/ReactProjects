import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ SingleQuestion }) => {
  let [condtion, setCondition] = useState(false);

  return (
    <div className="question">
      <h5>{SingleQuestion.title}</h5>
      <button onClick={() => setCondition(!condtion)}>
        {condtion ? (
          <AiOutlineMinus></AiOutlineMinus>
        ) : (
          <AiOutlinePlus></AiOutlinePlus>
        )}
      </button>
        {condtion && <p>{SingleQuestion.info}</p>}
    </div>
  );
};

export default Question;
