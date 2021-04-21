import React, { useEffect, useState } from "react";
import { RenderPropsComponent } from "../RenderPropsComponent/RenderPropsComponent";

export interface WithFeatureProps {
  text: string;
}

const withFeatureHoc = <P extends WithFeatureProps>(
  Wrapped: React.ComponentType<P>
) => {
  return (props: P) => {
    const [chars, setChars] = useState("");

    useEffect(() => {
      setChars(props.text + "x");
    }, [props.text]);

    const handleConcat = () => {
      setChars(chars + "x");
    };

    return (
      <div>
        <h1>{chars}</h1>
        <RenderPropsComponent>{(text) => <h1>{text}</h1>}</RenderPropsComponent>
        <button onClick={handleConcat}>Concat</button>
        <Wrapped {...(props as P)} />
      </div>
    );
  };
};

export { withFeatureHoc };
