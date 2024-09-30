import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home";
import PreviewPage from "./Components/Preview";

function App() {
  const [imageFile, setImageFile] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setImageFile={setImageFile} />} />
        <Route path="/preview" element={<PreviewPage imageFile={imageFile} />} />
      </Routes>
    </Router>
  );
}

export default App;
