import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("light");
      setToggleText("Light");
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtiles- Dark Mode";
      // setTimeout(() => {
      //   document.title = "TextUtiles is best";
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "Install TextUtiles Now";
      // }, 4000);
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      setModeText("dark");
      setToggleText("Dark");
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtiles- Light Mode";
      document.body.style.backgroundColor = "white";
    }
  };

  const [mode, setMode] = useState("light");

  const [modeText, setModeText] = useState("dark");

  const [toggleText, setToggleText] = useState("Dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <Router>
      <Navbar
        title="TextUtiles"
        mode={mode}
        toggle={toggleMode}
        modeText={modeText}
        toggleText={toggleText}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact path="/"
          element={<TextForm mode={mode} showAlert={showAlert} />}
        />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}
