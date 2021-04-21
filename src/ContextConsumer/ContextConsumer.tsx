import { useContext } from "react";
import { SharedContext } from "../contexts/SharedContext";

const ContextConsumer = () => {
  const context = useContext(SharedContext);
  return (
    <>
      <h1>{context.language}</h1>
      <button onClick={() => context.setLanguage("jp")}>Cambiar idioma</button>
    </>
  );
};

export { ContextConsumer };
