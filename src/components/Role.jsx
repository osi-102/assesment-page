import React, { useState } from 'react';

const YourComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const demoOptions = [
    { id: 'option1', value: 'Option 1', description: 'Description for Option 1' },
    { id: 'option2', value: 'Option 2', description: 'Description for Option 2' },
    { id: 'option3', value: 'Option 3', description: 'Description for Option 3' },
    { id: 'option4', value: 'Option 4', description: 'Description for Option 4' },
    { id: 'option5', value: 'Option 5', description: 'Description for Option 5' },
    { id: 'option6', value: 'Option 6', description: 'Description for Option 6' },
    { id: 'option7', value: 'Option 7', description: 'Description for Option 7' },
    { id: 'option8', value: 'Option 8', description: 'Description for Option 8' },
    { id: 'option9', value: 'Option 9', description: 'Description for Option 9' },
    { id: 'option10', value: 'Option 10', description: 'Description for Option 10' },
    { id: 'option11', value: 'Option 11', description: 'Description for Option 11' },
    { id: 'option12', value: 'Option 12', description: 'Description for Option 12' },
    { id: 'option13', value: 'Option 13', description: 'Description for Option 13' },
    // Add more options as needed
  ];

  return (
    <main className="grid min-h-screen w-full place-items-center">
      <div className="grid w-[40rem] grid-cols-4 gap-2 rounded-xl bg-gray-200 p-2">
        {demoOptions.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              name="option"
              id={option.id}
              value={option.value}
              className="peer hidden"
              checked={selectedOption === option.value}
              onChange={handleRadioChange}
            />
            <label
              htmlFor={option.id}
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">{option.value}</div>
                <div className="w-full">{option.description}</div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </main>
  );
};

export default YourComponent;
