import { useEffect, useState } from "react";

const useCheck = () => {
  const [checkState /*, setCheckState*/] = useState("No checking...");

  useEffect(() => {
    // Uncomment to test the useEffect clean function
    // const interval = setInterval(() => {
    //   console.log("Checking");
    //   setCheckState("Checking");
    // }, 1000);

    return () => {
      console.log("unmounting header");
      // clearInterval(interval);
    };
  }, []);

  return { checkState };
};

export { useCheck };
