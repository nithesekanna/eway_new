import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import ForgotPassword from "./component/Login/ForgotPassword/ForgotPassword";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
