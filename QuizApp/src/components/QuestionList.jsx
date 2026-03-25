import React from "react";

export default function QuestionList({
  question,
  options,
  handleClick,
  currentAnswer,
}) {
  return (
    <div className="question-container">
      <h2 align='left'>{question}</h2>
      <ul className="options-list">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => !currentAnswer && handleClick(option)}
            className={`option-item ${currentAnswer === option ? "selected" : ""} ${currentAnswer ? "locked" : ""}`}
            style={{
              cursor: currentAnswer ? "not-allowed" : "pointer",
              opacity: currentAnswer && currentAnswer !== option ? 0.6 : 1,
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
