import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Ques } from "./contexts/qusandanscontext.jsx";
import questions from "./contexts/ques.json"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <React.StrictMode>
      <Ques.Provider value={questions}>
      <App />
      </Ques.Provider>
    </React.StrictMode>
  </BrowserRouter>
);
