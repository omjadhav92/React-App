import React, { useState } from 'react';

export default function TextFrom(props) {

  const [text, setText] = useState('');

  // Convert text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  // Convert text to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  // Clear text
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared successfully", "success");
  };

  // Count characters without spaces
  const handleNcwpClick = () => {
    let newText = text.replace(/\s/g, "").length;
    window.alert("Number of characters without spaces: " + newText);
  };

  // Handle textarea changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Count words correctly
  const wordCount = text.trim() === ''
    ? 0
    : text.trim().split(/\s+/).length;

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }}
      >

        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === 'dark' ? 'white' : 'black',
              backgroundColor: props.mode === 'dark' ? '#343a40' : 'white'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClClick}
        >
          Clear Text
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleNcwpClick}
        >
          Number of Characters Without Spaces
        </button>

      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }}
      >

        <h1>Your Text Summary</h1>

        <p>
          {wordCount} words and {text.length} characters
        </p>

        <p>
          {0.008 * wordCount} Minutes read
        </p>

        <h2>Preview</h2>

        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>

      </div>
    </>
  );
}