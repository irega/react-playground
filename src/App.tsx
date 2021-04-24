import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Title from "./Title/Title";
import { ContextConsumer } from "./ContextConsumer/ContextConsumer";
import { SharedContext } from "./contexts/SharedContext";
import { SlowComponent } from "./SlowComponent/SlowComponent";
import { MyModal } from "./MyModal/MyModal";
import { ClassComponent } from "./ClassComponent/ClassComponent";

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);

  const setLanguage = (language: string) => {
    setState({ ...state, language: language });
  };

  const Lazy = lazy(() => import("./LazyComponent/LazyComponent"));

  const initState = {
    language: "en",
    setLanguage: setLanguage,
  };

  const [state, setState] = useState(initState);

  const handleShowHeader = () => setHeaderVisible(true);
  const handleHideHeader = () => setHeaderVisible(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(containerRef.current);
  }, []);

  return (
    <Suspense fallback={"Loading"}>
      <div ref={containerRef} className="App">
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
        <Lazy />
        <SlowComponent />
        <MyModal />
        <ClassComponent message={"one message"} />
      </div>
    </Suspense>
  );
}

export default App;
