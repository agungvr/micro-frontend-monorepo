import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./home.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Micro Frontend Monorepo</p>
        <div className="mb12">
          <Link to="/about">About</Link>
        </div>
        <div className="mb12">
          <Link to="/app2/home">App 2</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
