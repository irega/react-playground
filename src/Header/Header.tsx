import { PropsWithChildren, useEffect, useState } from "react";
import "./Header.css";

interface Props {
  onHide?: () => void;
}

const Header = ({ onHide, children }: PropsWithChildren<Props>) => {
  const [userName, setUserName] = useState("");
  const [checkState, setCheckState] = useState("No checking...");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Checking");
      setCheckState("Checking");
    }, 1000);

    return () => {
      console.log("unmounting header");
      clearInterval(interval);
    };
  }, []);

  const handleLogin = () => setUserName("irega@yahoo.es");
  const handleHideComponent = () => (onHide ? onHide() : void 0);

  return (
    <header className="App-header">
      {checkState && <div>{checkState}</div>}
      {userName && <div>{userName}</div>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleHideComponent}>Hide component</button>
      {children}
    </header>
  );
};

export { Header };
