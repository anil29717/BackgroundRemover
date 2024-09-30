import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

const HomePage = ({ setImageFile }) => {
  const [fileName, setFileName] = useState("Drag & Drop your image here");
  const navigate = useNavigate();


  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFileName(file.name);
    setImageFile(file);
  };

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
          <div className="bg-removeimage"
            ></div>
          </div>
          
          <h1 className="text-6xl font-bold text-left"> Remove Image </h1>
          <h1 className="text-6xl font-bold text-left"> Background  </h1>
          <h2 className="text-lg mt-4"> 100% Automatically and    <span className="font-bold bg-yellow-600 rounded-xl py-1 px-2 text-white">Free</span></h2>
        </div>
        <div className="mt-10">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="flex items-center justify-center w-80 h-48 border-2 border-dashed border-blue-500 rounded-lg bg-white text-gray-700 cursor-pointer"
          >
            {fileName}
          </div>
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
