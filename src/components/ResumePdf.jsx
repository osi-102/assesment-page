import React, { useState } from 'react';

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log('File uploaded:', selectedFile);
    // You can send the file to the server or perform any other action
  };

  return (
    <div className="flex items-center justify-center  h-screen">
        <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
      <div className="max-w-md w-full bg-white rounded-lg shadow-md">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className={`py-2 px-4 bg-blue-500 text-white rounded ${
            selectedFile ? 'cursor-pointer hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
