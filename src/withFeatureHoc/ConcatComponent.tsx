import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  onCallback: () => void;
}

const ConcatComponent = (props: Props) => {
  const [chars, setChars] = useState("");

  useEffect(() => {
    setChars(props.text + "x");
  }, [props.text]);

  const handleConcat = () => {
    setChars(chars + "x");
  };

  return (
    <>
      <h1>{chars}</h1>
      <button onClick={handleConcat}>Concat</button>
      <button onClick={props.onCallback}>Callback</button>
    </>
  );
};

const ConcatComponentMemo = React.memo(ConcatComponent);

export { ConcatComponentMemo as ConcatComponent };
