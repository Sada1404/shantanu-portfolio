import logo from './logo.svg';
import React, { useState } from "react";
import FileUploadComponent from "./components/FileUploadComponent";
import './App.css';

function App() {
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (file, isValid) => {
    console.log("Selected file:", file);
    console.log("Is valid:", isValid);
    setFileData(file);
  };

  return (
    <div>
      <div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>🚀 Welcome to React!</h1>
          <p>This is your first React App.</p>
        </div>
        <h2>Upload Files</h2>
        <div className="form_section">
          <FileUploadComponent
            label="Recommended Size - 1350px X 1080px"
            name="imageUpload"
            allowedClasses="image"
            onChange={handleFileChange}
          />
          <FileUploadComponent
            label="Video Upload"
            name="videoUpload"
            allowedClasses="video"
            onChange={handleFileChange}
          />

          <FileUploadComponent
            label="PDF Upload"
            name="pdfUpload"
            allowedClasses="pdf"
            onChange={handleFileChange}
          />

        </div>

      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </div>
  );
}

export default App;
