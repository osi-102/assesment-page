import React, { useState } from "react";

const EducationComponent = () => {
  const [educationList, setEducationList] = useState([
    { school: "", degree: "", startDate: "", endDate: "" },
  ]);

  const handleAddEducation = () => {
    setEducationList([
      ...educationList,
      { school: "", degree: "", startDate: "", endDate: "" },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(index, 1);
    setEducationList(updatedEducationList);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducationList = [...educationList];
    updatedEducationList[index][name] = value;
    setEducationList(updatedEducationList);
  };

  return (
    <div className="mt-8    ">
      <h2 className="text-2xl font-bold">Education</h2>
      {educationList.map((education, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            School/College
          </label>
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={(e) => handleInputChange(index, e)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />

          <label className="block text-sm font-semibold mt-2 mb-1">
            Degree
          </label>
          <input
            type="text"
            name="degree"
            value={education.degree}
            onChange={(e) => handleInputChange(index, e)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />

          <div className="flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-sm font-semibold mb-1">
                Start Date
              </label>
              <input
                type="text"
                name="startDate"
                value={education.startDate}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="MM/YYYY"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-sm font-semibold mb-1">
                End Date
              </label>
              <input
                type="text"
                name="endDate"
                value={education.endDate}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="MM/YYYY"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex sm:col-span-2 sm:col-start-1 gap-4">
            <button
              type="button"
              onClick={() => handleRemoveEducation(index)}
              className="bg-gray-400 text-black px-4 py-2 mt-6 mb-6 border-2 border-black rounded hover:bg-gray-600 hover:text-white focus:outline-none focus:shadow-outline-blue"
            >
              Remove
            </button>
            <button
              type="button"
              onClick={handleAddEducation}
              className="bg-gray-400 text-black px-4 py-2 mt-6 mb-6 border-2 border-black rounded hover:bg-gray-600 hover:text-white focus:outline-none focus:shadow-outline-blue"
            >
              Add Education
            </button>
          </div>

          <div className="sm:col-span-2"></div>
            
        </div>
       
      ))}
    </div>
  );
};

export default EducationComponent;
