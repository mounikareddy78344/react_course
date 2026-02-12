import React from "react";

function Stats({ wordSignal, characterSignal }) {
  return (
    <div className="stats mt-3">
      <span>Word Signal: {wordSignal}</span>
      <span>Character Signal: {characterSignal}</span>
    </div>
  );
}

export default Stats;
