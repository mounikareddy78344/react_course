import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TextEditor from "./components/TextEditor";
import Info from "./components/Info";
import ReviewCards from "./components/ReviewCards";
import Notification from "./components/Notification";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainApp() {
  const [theme, setTheme] = useState("light");
  const [notification, setNotification] = useState(null);

  const displayNotification = (message, type) => {
    setNotification({ msg: message, type: type });
    setTimeout(() => setNotification(null), 2000);
  };

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#1e293b";
      displayNotification("Dark Theme Enabled", "success");
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      displayNotification("Light Theme Enabled", "success");
    }
  };

  return (
    <Router>
      <Header brand="Neon Studio" theme={theme} switchTheme={switchTheme} />
      <Notification notification={notification} />

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <TextEditor
                heading="Enter Text Below"
                theme={theme}
                displayNotification={displayNotification}
              />
            }
          />
          <Route path="/info" element={<Info />} />
          <Route path="/reviews" element={<ReviewCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainApp;
