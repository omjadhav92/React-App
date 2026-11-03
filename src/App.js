import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
// import About from './components/About';

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
}, 2000);

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
<> <Navbar
     title="TextUtils"
     mode={Mode}
     toggleMode={toggleMode}
   />


  <Alert alert={alert} />

  <div className="container my-3">

    <TextFrom
      showAlert={showAlert}
      heading="Enter the text to analyze below"
      mode={Mode}
    />

  </div>
</>


);
}

export default App;
