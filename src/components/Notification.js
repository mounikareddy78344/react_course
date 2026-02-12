import React from "react";

function Notification({ notification }) {
  return (
    notification && (
      <div className={`alert alert-${notification.type}`} role="alert">
        {notification.msg}
      </div>
    )
  );
}

export default Notification;
