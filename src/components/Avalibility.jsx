import React, { useState } from "react";

const RadioGroupWithDescriptions = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const hostingOptions = [
    {
      id: "hosting-small",
      value: "hosting-small",
      label: "0-50 MB",
      description: "Good for small websites",
    },
    {
      id: "hosting-medium",
      value: "hosting-medium",
      label: "100-500 MB",
      description: "Suitable for medium-sized websites",
    },
    {
      id: "hosting-big",
      value: "hosting-big",
      label: "500-1000 MB",
      description: "Good for large websites",
    },
  ];

  return (
    <div>
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        How much do you expect to use each month?
      </h3>
      <ul className="grid w-full gap-6 md:flex-col">
        {hostingOptions.map((option) => (
          <li key={option.id}>
            <input
              type="radio"
              id={option.id}
              name="hosting"
              value={option.value}
              className="hidden peer"
              checked={selectedOption === option.value}
              onChange={handleRadioChange}
              required
            />
            <label
              htmlFor={option.id}
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-dashed border-2 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {option.label}
                </div>
                <div className="w-full">{option.description}</div>
              </div>
              <svg
                className="w-5 h-5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioGroupWithDescriptions;
