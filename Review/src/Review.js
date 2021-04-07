import React, { useState } from "react";
import people from "./data";
//install react-icon package first
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [currentIndex, setCurretnIndex] = useState(0);
  const { image, name, job, text } = people[currentIndex];
  console.log(currentIndex)
  function nextReview() {
    if (currentIndex >= 0 && currentIndex < people.length-1) {
      setCurretnIndex(currentIndex + 1);
    }
  }
  function prevRevies() {
    if (currentIndex != 0 && currentIndex <= people.length)
      setCurretnIndex(currentIndex - 1);
  }

  return (
    <div className="review-container">
      <div className="single-review">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{text}</p>
      </div>
      <div className="change-review">
        <button onClick={prevRevies}>
          <FaChevronLeft />
        </button>
        <button onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Review;
