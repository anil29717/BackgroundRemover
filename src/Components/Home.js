import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const HomePage = ({ setImageFile }) => {
  const [fileName, setFileName] = useState("Drag & Drop your image here");
  const navigate = useNavigate();

  // Handle drop event for drag-and-drop functionality
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFileName(file.name);
    setImageFile(file);
  };

  // Handle image selection from the file upload input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setImageFile(file);
    }
  };

  // Handle button click for navigation
  const handleUploadClick = () => {
    if (fileName !== "Drag & Drop your image here") {
      navigate("/preview");
    } else {
      alert("Please upload an image!");
    }
  };

  return (
    <div className="main-div flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="absolute flex justify-center top-5 mb-2 left-5 text-2xl font-bold text-blue-600 border-b-2 border-black">
        <div className="bg-logo"></div>BGREMOVER
      </div>
      
      <div className="flex justify-center gap-28">
        <div>
          <div className="flex justify-center">
            <div className="bg-removeimage"></div>
          </div>

          <h1 className="text-6xl font-bold text-left"> Remove Image </h1>
          <h1 className="text-6xl font-bold text-left"> Background </h1>
          <h2 className="text-lg mt-4"> 100% Automatically and <span className="font-bold bg-yellow-600 rounded-xl py-1 px-2 text-white">Free</span></h2>
        </div>
        
        <div className="mt-10">
          {/* Drag-and-drop area */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="flex items-center justify-center w-80 h-48 border-2 border-dashed border-blue-500 rounded-lg bg-white text-gray-700 cursor-pointer"
          >
            {fileName}
          </div>

          {/* File upload input with styling */}
          <div className="flex justify-center mt-5">
            <label className="w-40 flex flex-col items-center px-4 py-6 bg-blue-500 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600">
              <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.5l-6.36-6.37a1.26 1.26 0 0 0-1.76 0L2.37 9.5a1.26 1.26 0 1 0 1.78 1.78l.52-.52V15a1.25 1.25 0 0 0 1.25 1.25h3.75A1.25 1.25 0 0 0 11.5 15v-4.23l.52.52a1.25 1.25 0 0 0 1.76-1.76zm-.62 1.88L9.75 7.25a.25.25 0 0 1 0-.35l5.62-5.62a.25.25 0 0 1 .35 0l1.88 1.88a.25.25 0 0 1 0 .35l-5.62 5.62a.25.25 0 0 1-.35 0L9.5 8.5v3.62a.25.25 0 0 1-.25.25H5.75a.25.25 0 0 1-.25-.25v-2.12l-.52.52a.25.25 0 0 1-.35 0l-.88-.88a.25.25 0 0 1 0-.35L8.25 2.25a.25.25 0 0 1 .35 0l7 7a.25.25 0 0 1 0 .35l-.88.88a.25.25 0 0 1-.35 0z"/>
              </svg>
              <span className="mt-2 text-base leading-normal">Choose File</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Upload button */}
          <div className="flex justify-center">
            <button
              onClick={handleUploadClick}
              className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Upload Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
