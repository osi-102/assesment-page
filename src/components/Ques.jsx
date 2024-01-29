import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AssessmentPage = () => {
  // State variables
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [mcqOptions, setMcqOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNext, setShowNext] = useState(false);

  const navigate = useNavigate();


  // Code snippets for different languages
  const codeSnippets = {
    c: [
      {
        code: '#include <stdio.h> int main() {\n  int x = 5;\n  printf("%d\\n", x++ * 2);\n  return 0;\n}',
        output: "10",
        options: ["10", "15", "20", "25"],
      },
      {
        code: '#include <stdio.h>\nint main() {\n  int x = 5;\n  printf("%d\\n", ++x * 2);\n  return 0;\n}',
        output: "12",
        options: ["12", "15", "18", "20"],
      },
      {
        code: `'#include <stdio.h>
        int main() {\n  int x = 5;
              printf("%d\\n", x += 3);
                return 0;\n}`,
        output: "8",
        options: ["5", "8", "10", "12"],
      },
    ],
    cpp: [
      {
        code: "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n  cout << x++ * 2 << endl;\n  return 0;\n}",
        output: "10",
        options: ["5", "10", "15", "20"],
      },
      {
        code: "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n  cout << ++x * 2 << endl;\n  return 0;\n}",
        output: "12",
        options: ["12", "15", "18", "20"],
      },
      {
        code: "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n  cout << (x += 3) << endl;\n  return 0;\n}",
        output: "8",
        options: ["5", "8", "10", "12"],
      },
    ],
    javascript: [
      {
        code: "let x = 5;\nconsole.log(x++ * 2);",
        output: "10",
        options: ["5", "8", "10", "12"],
      },
      {
        code: "let x = 5;\nconsole.log(++x * 2);",
        output: "12",
        options: ["12", "15", "18", "20"],
      },
      {
        code: "let x = 5;\nconsole.log(x += 3);",
        output: "8",
        options: ["5", "8", "10", "12"],
      },
    ],
    python: [
      {
        code: "x = 5\nprint(x++ * 2)",
        output: "SyntaxError",
        options: ["SyntaxError", "5", "8", "10"],
      },
      {
        code: "x = 5\nprint(++x * 2)",
        output: "SyntaxError",
        options: ["SyntaxError", "5", "8", "10"],
      },
      {
        code: "x = 5\nprint(x += 3)",
        output: "8",
        options: ["5", "8", "10", "12"],
      },
    ],
  };

  // List of available coding languages
  const languages = ["c", "cpp", "javascript", "python"];

  // Function to generate a new question
  const generateNewQuestion = () => {
    const randomCodeSnippet =
      codeSnippets[selectedLanguage][
        Math.floor(Math.random() * codeSnippets[selectedLanguage].length)
      ];

    const options = randomCodeSnippet.options;

    setCodeSnippet(randomCodeSnippet.code);
    setMcqOptions(options);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowNext(false);
  };

  // useEffect to generate a new question when the selected language changes
  useEffect(() => {
    generateNewQuestion();
  }, [selectedLanguage]);

  // Function to handle option selection
  const handleOptionSelect = (index) => {
    if (!showNext) { // Allow selection only if the Next button is not shown
      setIsCorrect(
        mcqOptions[index] ===
        codeSnippets[selectedLanguage].find(
          (snippet) => snippet.code === codeSnippet
        )?.output
      );
      setSelectedOption(index);
      setShowNext(true);
    }
  };

  // Function to handle the "Next" button click
  // const handleNextClick = () => {
  //   generateNewQuestion();
    
  // };

  const handleNextClick = () => {
    // If the correct option is selected, navigate to ResumeForm component
    if (showNext && isCorrect) {
      navigate("/resume-form"); // Update the path according to your route configuration
    } else {
      // If the correct option is not selected, generate a new question
      generateNewQuestion();
    }
  };

  // Function to handle the "Retry" button click
  const handleRetryClick = () => {
    generateNewQuestion();
    setShowNext(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  // JSX rendering
  return (
    <div className="h-screen bg-neutral-900 text-white flex flex-col  p-4">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center">
          Coding Language Assessment
        </h2>
      </div>

      {/* Language selection */}
      <div className="mb-8">
        <label
          htmlFor="language"
          className="text-lg font-medium mb-2 flex flex-col justify-center items-center"
        >
          Choose Coding Language:
        </label>
        <div className="flex flex-col justify-center items-center ">
          <select
            id="language"
            className="p-2 rounded-md bg-gray-800 text-white flex flex-col justify-center items-center w-40"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Question and code snippet */}
      <div className="mb-8 flex flex-col justify-center items-center ">
        <div className="mb-4 text-center ">
          <h3 className="text-lg font-medium">Question:</h3>
          <p>What will be the output of the following code?</p>
        </div>

        <div>
          <div className="mb-4 flex flex-col justify-center items-center">
            <h3 className="text-lg font-medium ">Code Snippet:</h3>
            <code className="block bg-gray-800 p-4 rounded-md text-green-400  ">
              {codeSnippet}
            </code>
          </div>
        </div>

        {/* Options */}
        <div>
          <h3 className="text-lg font-medium mb-2">
            Select the correct output:
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {mcqOptions.map((option, index) => (
              <div
                key={index}
                className={`flex-1 bg-gray-800 border-2 border-white p-4 rounded-full cursor-pointer text-center ${
                  selectedOption === index ? "bg-blue-500" : ""
                }`}
                style={{ width: "200px" }}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* Next and Retry buttons */}
      <div className="flex flex-col justify-center items-center">
        {showNext && isCorrect ? (
          <div className="text-green-500 mb-2">
            You chose the correct option! {/* Message for correct answer */}
          </div>
        ) : showNext ? (
          <div className="text-red-500 mb-2">
            Wrong answer. Please retry. {/* Message for wrong answer */}
          </div>
        ) : null}

        {/* Buttons for Next or Retry based on the answer */}
        {showNext ? (
          isCorrect ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 transition duration-300 hover:bg-green-600"
              onClick={handleNextClick}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 transition duration-300 hover:bg-red-600"
              onClick={handleRetryClick}
            >
              Retry
            </button>
          )
        ) : null}
      </div>
    </div>
  );
};

export default AssessmentPage;
