import React, { useState } from "react";

function TextEditor({ heading, theme, displayNotification }) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    displayNotification("Converted to Uppercase", "success");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    displayNotification("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    displayNotification("Text Cleared Successfully", "warning");
  };

  return (
    <div>
      <h2 className={theme === "dark" ? "text-light" : ""}>
        {heading}
      </h2>

      <textarea
        className="form-control"
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button className="btn btn-primary mt-3 mx-2" onClick={handleUpperCase}>
        Uppercase
      </button>

      <button className="btn btn-secondary mt-3 mx-2" onClick={handleLowerCase}>
        Lowercase
      </button>

      <button className="btn btn-danger mt-3" onClick={handleClear}>
        Clear Text
      </button>
    </div>
  );
}

export default TextEditor;
