import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css'

const PreviewPage = ({ imageFile }) => {
  const [bgRemovedImage, setBgRemovedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const removeBackground = async () => {
      setLoading(true);
      const formData = new FormData();
      formData.append("image_file", imageFile);
      formData.append("size", "auto");

      try {
        const response = await axios({
          method: "post",
          url: "https://api.remove.bg/v1.0/removebg",
          data: formData,
          headers: {
            "X-Api-Key": "Xcr9rndu5rphUcqcehmmAK4L", // Replace with your API key
          },
          responseType: "blob", // We want the image as a blob to display it
        });

        const blob = new Blob([response.data], { type: "image/png" });
        const imageUrl = URL.createObjectURL(blob);
        setBgRemovedImage(imageUrl);
      } catch (error) {
        console.error("Error removing background:", error);
        alert("Failed to remove background.");
      } finally {
        setLoading(false);
      }
    };

    if (imageFile) {
      removeBackground();
    }
  }, [imageFile]);

  return (
    <div className="main-div flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold py-10"> Here is Image with removed Background</h1>
      <div className="flex justify-around w-4/5">
        <div className="w-1/2 px-5">
          <h3 className="text-lg text-center font-semibold text-gray-700 mb-3">Original Image</h3>
          <div className="flex justify-center">
          {imageFile && (
            <img 
              src={URL.createObjectURL(imageFile)}
              alt="Original"
              className="w-8/12 border-2 border-blue-500 rounded-lg"
            />
          )}
          </div>
          
        </div>

        <div className="w-1/2 px-5">
          <h3 className="text-lg text-center font-semibold text-gray-700 mb-3">Background Removed</h3>
          <div className="flex justify-center">
          {loading ? (
            <div className="text-center">Removing background...</div>
          ) : bgRemovedImage ? (
            <img
              src={bgRemovedImage}
              alt="Background Removed"
              className="w-8/12 border-2 border-green-500 rounded-lg"
            />
          ) : (
            <div className="text-center">No image processed yet.</div>
          )}
        </div>
          </div>
      </div>

      {bgRemovedImage && (
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = bgRemovedImage;
            link.download = "bg-removed-image.png";
            link.click();
          }}
          className="mt-5 px-6 py-3 bg-blue-900 font-semibold text-white rounded hover:bg-green-600 focus:outline-none"
        >
          Download
        </button>
      )}
    </div>
  );
};

export default PreviewPage;
