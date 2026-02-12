import React from "react";

function Preview({ text }) {
  return (
    <>
      <h5 className="mt-3">Instant Preview Panel</h5>
      <div className="output-box">
        {text || "Your live text preview will appear here..."}
      </div>
    </>
  );
}

export default Preview;
