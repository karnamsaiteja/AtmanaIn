import React from "react";
import "./DisplayedJoke.css";

const DisplayJoke = ({ joke, randomJoke }) => {
  return (
    <div className="joke-box-container">
      <div className="joke-box">{joke}</div>

      <div>
        <button
          className="category-button new-joke"
          onClick={() => randomJoke()}
        >
          New Joke
        </button>
      </div>
    </div>
  );
};

export default DisplayJoke;
