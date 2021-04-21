import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { useState } from "react";
import Title from "./Title/Title";
import { ContextConsumer } from "./ContextConsumer/ContextConsumer";
import { SharedContext } from "./contexts/SharedContext";

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);

  const setLanguage = (language: string) => {
    setState({ ...state, language: language });
  };

  const initState = {
    language: "en",
    setLanguage: setLanguage,
  };

  const [state, setState] = useState(initState);

  const handleShowHeader = () => setHeaderVisible(true);
  const handleHideHeader = () => setHeaderVisible(false);

  return (
    <div className="App">
      <Title text={"hola"} />
      <SharedContext.Provider value={state}>
        <ContextConsumer />
      </SharedContext.Provider>
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
