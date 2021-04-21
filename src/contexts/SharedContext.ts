import React from "react";

const SharedContext = React.createContext({
  language: "en",
  setLanguage: (language: string) => {},
});

export { SharedContext };
