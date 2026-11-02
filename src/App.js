import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  // State for Dark Mode and Light Mode
  const [Mode, setMode] = useState('light');

  // State for Alert
  const [alert, setAlert] = useState(null);

  // Function to show Alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  };

  // Function to toggle Dark Mode and Light Mode
  const toggleMode = () => {

    if (Mode === 'light') {

      setMode('dark');

      document.body.style.backgroundColor = '#343a40';

      showAlert(
        "Dark mode has been enabled successfully",
        "success"
      );
      // setInterval (() =>{
      //   document.title = 'TextUtils is amazing mode'

      // },2000)

      // setInterval (() =>{
      //   document.tile = 'TextUtils install now'
      // },1500)

    } else {

      setMode('light');

      document.body.style.backgroundColor = 'white';

      showAlert(
        "Light mode has been enabled successfully",
        "success"
      );

    }
  };
   return (
  <>
    <Router>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route
           exact path="/about"
            element={<About />}
          />

          <Route
            exact path="/"
            element={
              <TextFrom
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={Mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  </>
);
};

export default App;