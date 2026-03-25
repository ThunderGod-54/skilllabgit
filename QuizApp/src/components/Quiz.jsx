import React, { useState } from "react";
import "./Quiz.css";
import QuestionList from "./QuestionList";

export default function Quiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is React?",
      options: [
        "A JavaScript library",
        "A CSS framework",
        "A database",
        "A programming language",
      ],
      answer: "A JavaScript library",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null); 
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentAnswer !== null) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer(null); 
    }
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h1>Quiz App</h1>
          <QuestionList
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      ) : (
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score is {score} out of {questions.length}
          </p>
          
        </div>
      )}
    </div>
  );
}
