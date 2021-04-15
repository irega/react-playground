import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { useState } from "react";

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleShowHeader = () => setHeaderVisible(true);
  const handleHideHeader = () => setHeaderVisible(false);

  return (
    <div className="App">
      {headerVisible ? (
        <Header onHide={handleHideHeader}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      ) : (
        <button onClick={handleShowHeader}>Show component</button>
      )}
    </div>
  );
}

export default App;
