import React from "react";

function ReviewCards() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <h5>User Review</h5>
          <p>This app is very helpful and easy to use!</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3">
          <h5>Feedback</h5>
          <p>Dark mode feature is awesome!</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCards;
