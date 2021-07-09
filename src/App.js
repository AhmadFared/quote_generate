import React, { useState, useEffect } from "react";
import "./App.css";
import image from "./body.jpg";

function App() {
  const [advice, setAdvice] = useState([]);
  const axios = require("axios").default;

  const generateAdvice = () =>
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        console.log(response.data.slip);
      })
      .catch((error) => console.log(error));

  useEffect(() => {
    generateAdvice();
  }, []);
  return (
    <div className="main-body container-fluid">
      <div className="advice-container">
        <div className="advice">{advice}</div>
        {/* <div className="advice">Hello go bring your pet</div> */}
        <div className="generate">
          <button className="button btn-4" onClick={generateAdvice}>
            Give me an Advice!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
