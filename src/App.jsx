import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert();
    }, 1500);
  };

  const clickToggleMode = () => {
    if (mode.color === "black") {
      setMode({
        color: "white",
        backgroundColor: "black",
      });
      // document.body.style.backgroundColor = "black";

      showAlert("the dark mode is enable", "success");
    } else {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      showAlert("the light mode is enable", "success");

      setInterval(() => {
        document.title = "Dark mode on";
      }, 1000);
      setInterval(() => {
        document.title = "light mode on";
      }, 1500);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode.backgroundColor;
    document.body.style.color = mode.color;
  }, [mode]);
  return (
    <Router>
      <div>
        <Navbar
          title="TextUtilities"
          about="About as"
          home="Home"
          mode={mode}
          clickToggleMode={clickToggleMode}
        />
        <Alert alert={alert} />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextArea
              heading="Enter the text to analyze below"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
