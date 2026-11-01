import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
    
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Converted into upperCase", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  function handleRemoveSpaces() {
    setText(text.replace(/\s+/g, " ").trim());
  }

  function handleCopyText() {
    navigator.clipboard.writeText(text);
  }

  function handleCutText() {
    navigator.clipboard.writeText(text);
    setText("");
  }

  const handlePaste = async () => {
    const clipboardText = await navigator.clipboard.readText();

    setText((prevText) => prevText + clipboardText);
  };

  return (
    <>
      <div className="mt-10">
        <div className="container ">
          <div className="form-field ">
            <label htmlFor="exampleFormControlTextarea2" className="form-label">
              <h2 style={props.mode}>{props.heading}</h2>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="6"
              onChange={handleChange}
              value={text}
              style={props.mode}
            ></textarea>
          </div>
          <button
            className="btn-solid theme-primary mt-2 mx-2"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn-solid theme-primary mt-2  mx-2"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>

          <button
            className="btn-solid theme-primary mt-2  mx-2"
            onClick={handleRemoveSpaces}
          >
            Remove All White Spaces
          </button>

          <button
            className="btn-solid theme-primary mt-2  mx-2"
            onClick={handleCopyText}
          >
            Copy Text
          </button>

          <button
            className="btn-solid theme-primary mt-2  mx-2"
            onClick={handlePaste}
          >
            Paste Text
          </button>
          <button
            className="btn-solid theme-primary mt-2  mx-2"
            onClick={handleCutText}
          >
            Cut Text
          </button>
        </div>
      </div>

      <div className="container">
        <h2 className="mt-10">Text Summary</h2>
        <p>
          The total words {text.trim().split(/\s+/).filter(Boolean).length} and
          Letters is {text.replace(/\s/g, "").length}
        </p>
      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextArea;
