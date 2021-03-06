import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import CardApp1 from "../../components/Card";
import { importModule } from "../../utils/importModule";
import "./home.css";

const CardApp2 = importModule("@vr/app2", "Card");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Micro Frontend Monorepo</p>
        <div className="card-wrapper">
          <CardApp1 />
          <CardApp2 />
        </div>
        <div className="mb12">
          <Link to="/about">Go to App 1 - About</Link>
        </div>
        <div className="mb12">
          <Link to="/app2/home">Go to App 2 - Home</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
