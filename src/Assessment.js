import React, { useState } from "react";
import "./Assessment.css";
import Menubar2 from "./Menubar2";
import { Link } from "react-router-dom";

function Assessment() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What does CSS stand for?",
      options: [
        { id: 0, text: "Computer Style Sheets", isCorrect: false },
        { id: 1, text: "Cascading Style Sheets", isCorrect: true },
        { id: 2, text: "Creative Style Sheets", isCorrect: false },
        { id: 3, text: "Colorful Style Sheets", isCorrect: false },
      ],
    },
    {
      text: "How many types of Styling are there in Css?",
      options: [
        { id: 0, text: "inline styling", isCorrect: false },
        { id: 1, text: "external styling", isCorrect: false },
        { id: 2, text: "internal styling", isCorrect: false },
        { id: 3, text: "inline, external, internal Styling", isCorrect: true },
      ],
    },    
    {
      text: "Whih CSS property controls the text size?",
      options: [
        { id: 0, text: "font-size", isCorrect: true },
        { id: 1, text: "font-style", isCorrect: false },
        { id: 2, text: "text-style", isCorrect: false },
        { id: 3, text: "text-size", isCorrect: false },
      ],
    },
    {
      text: "Which HTMl attribute is used to define inline styles?",
      options: [
        { id: 0, text: "Class", isCorrect: false },
        { id: 1, text: "style", isCorrect: true },
        { id: 2, text: "font", isCorrect: false },
        { id: 3, text: "styles", isCorrect: false },
      ],
    },
    {
      text: "Which is the Correct CSS Syntax?",
      options: [
        { id: 0, text: "{body:color=black;}", isCorrect: false },
        { id: 1, text: "body{color:black;}", isCorrect: true },
        { id: 2, text: "{body;color=black;}", isCorrect: false },
        { id: 3, text: "body:color=black;", isCorrect: false },
      ],
    },
    {
      text: "How do you select an element with id 'demo'?",
      options: [
        { id: 0, text: "*demo", isCorrect: false },
        { id: 1, text: "demo", isCorrect: false },
        { id: 2, text: ".demo", isCorrect: false},
        { id: 3, text: "#demo", isCorrect: true },
      ],
    },
    {
      text: "How do you select the elements with class name 'test'?",
      options: [
        { id: 0, text: ".test", isCorrect: true },
        { id: 1, text: "test", isCorrect: false },
        { id: 2, text: "#test", isCorrect: false },
        { id: 3, text: "*test", isCorrect: false },
      ],
    },
    {
      text: "Where is an HTML document is the correct place to refer to an external style sheet?",
      options: [
        { id: 0, text: "In the <body> section", isCorrect: false },
        { id: 1, text: "At the starting of the document", isCorrect: false },
        { id: 2, text: "In the <head> section", isCorrect: true },
        { id: 3, text: "At the end of the document", isCorrect: false },
      ],
    },
    {
        text: "What does CSS stand for?",
        options: [
          { id: 0, text: "Computer Style Sheets", isCorrect: false },
          { id: 1, text: "Cascading Style Sheets", isCorrect: true },
          { id: 2, text: "Creative Style Sheets", isCorrect: false },
          { id: 3, text: "Colorful Style Sheets", isCorrect: false },
        ],
      },
      {
        text: "How many types of Styling are there in Css?",
        options: [
          { id: 0, text: "inline styling", isCorrect: false },
          { id: 1, text: "external styling", isCorrect: false },
          { id: 2, text: "internal styling", isCorrect: false },
          { id: 3, text: "inline, external, internal Styling", isCorrect: true },
        ],
      },    
      {
        text: "Whih CSS property controls the text size?",
        options: [
          { id: 0, text: "font-size", isCorrect: true },
          { id: 1, text: "font-style", isCorrect: false },
          { id: 2, text: "text-style", isCorrect: false },
          { id: 3, text: "text-size", isCorrect: false },
        ],
      },
      {
        text: "Which HTMl attribute is used to define inline styles?",
        options: [
          { id: 0, text: "Class", isCorrect: false },
          { id: 1, text: "style", isCorrect: true },
          { id: 2, text: "font", isCorrect: false },
          { id: 3, text: "styles", isCorrect: false },
        ],
      },
      {
        text: "Which is the Correct CSS Syntax?",
        options: [
          { id: 0, text: "{body:color=black;}", isCorrect: false },
          { id: 1, text: "body{color:black;}", isCorrect: true },
          { id: 2, text: "{body;color=black;}", isCorrect: false },
          { id: 3, text: "body:color=black;", isCorrect: false },
        ],
      },
      {
        text: "How do you select an element with id 'demo'?",
        options: [
          { id: 0, text: "*demo", isCorrect: false },
          { id: 1, text: "demo", isCorrect: false },
          { id: 2, text: ".demo", isCorrect: false},
          { id: 3, text: "#demo", isCorrect: true },
        ],
      },
      {
        text: "How do you select the elements with class name 'test'?",
        options: [
          { id: 0, text: ".test", isCorrect: true },
          { id: 1, text: "test", isCorrect: false },
          { id: 2, text: "#test", isCorrect: false },
          { id: 3, text: "*test", isCorrect: false },
        ],
      },
      {
        text: "Where is an HTML document is the correct place to refer to an external style sheet?",
        options: [
          { id: 0, text: "In the <body> section", isCorrect: false },
          { id: 1, text: "At the starting of the document", isCorrect: false },
          { id: 2, text: "In the <head> section", isCorrect: true },
          { id: 3, text: "At the end of the document", isCorrect: false },
        ],
      },
      {
        text: "What does CSS stand for?",
        options: [
          { id: 0, text: "Computer Style Sheets", isCorrect: false },
          { id: 1, text: "Cascading Style Sheets", isCorrect: true },
          { id: 2, text: "Creative Style Sheets", isCorrect: false },
          { id: 3, text: "Colorful Style Sheets", isCorrect: false },
        ],
      },
      {
        text: "How many types of Styling are there in Css?",
        options: [
          { id: 0, text: "inline styling", isCorrect: false },
          { id: 1, text: "external styling", isCorrect: false },
          { id: 2, text: "internal styling", isCorrect: false },
          { id: 3, text: "inline, external, internal Styling", isCorrect: true },
        ],
      },    
      {
        text: "Whih CSS property controls the text size?",
        options: [
          { id: 0, text: "font-size", isCorrect: true },
          { id: 1, text: "font-style", isCorrect: false },
          { id: 2, text: "text-style", isCorrect: false },
          { id: 3, text: "text-size", isCorrect: false },
        ],
      },
      {
        text: "Which HTMl attribute is used to define inline styles?",
        options: [
          { id: 0, text: "Class", isCorrect: false },
          { id: 1, text: "style", isCorrect: true },
          { id: 2, text: "font", isCorrect: false },
          { id: 3, text: "styles", isCorrect: false },
        ],
      },
      {
        text: "Which is the Correct CSS Syntax?",
        options: [
          { id: 0, text: "{body:color=black;}", isCorrect: false },
          { id: 1, text: "body{color:black;}", isCorrect: true },
          { id: 2, text: "{body;color=black;}", isCorrect: false },
          { id: 3, text: "body:color=black;", isCorrect: false },
        ],
      },
      {
        text: "How do you select an element with id 'demo'?",
        options: [
          { id: 0, text: "*demo", isCorrect: false },
          { id: 1, text: "demo", isCorrect: false },
          { id: 2, text: ".demo", isCorrect: false},
          { id: 3, text: "#demo", isCorrect: true },
        ],
      },
      {
        text: "How do you select the elements with class name 'test'?",
        options: [
          { id: 0, text: ".test", isCorrect: true },
          { id: 1, text: "test", isCorrect: false },
          { id: 2, text: "#test", isCorrect: false },
          { id: 3, text: "*test", isCorrect: false },
        ],
      },
      {
        text: "Where is an HTML document is the correct place to refer to an external style sheet?",
        options: [
          { id: 0, text: "In the <body> section", isCorrect: false },
          { id: 1, text: "At the starting of the document", isCorrect: false },
          { id: 2, text: "In the <head> section", isCorrect: true },
          { id: 3, text: "At the end of the document", isCorrect: false },
        ],
      },
      {
        text: "Where is an HTML document is the correct place to refer to an external style sheet?",
        options: [
          { id: 0, text: "In the <body> section", isCorrect: false },
          { id: 1, text: "At the starting of the document", isCorrect: false },
          { id: 2, text: "In the <head> section", isCorrect: true },
          { id: 3, text: "At the end of the document", isCorrect: false },
        ],
      },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const retake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <>
    <Menubar2></Menubar2>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#fullstackVedios">Vedios</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/Assessment"><a class="nav-link" href="#">Assessment</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/AskQuery"><a class="nav-link" href="#">Ask a Query</a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
    <div className="Quiz">
      {/* 1. Header  */}
      <h1>HTML Assessment</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => retake()}>Retake Test</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}

export default Assessment;