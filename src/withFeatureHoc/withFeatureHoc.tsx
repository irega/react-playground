import React, { useCallback } from "react";
import { RenderPropsComponent } from "../RenderPropsComponent/RenderPropsComponent";
import { ConcatComponent } from "./ConcatComponent";

export interface WithFeatureProps {
  text: string;
}

const withFeatureHoc = <P extends WithFeatureProps>(
  Wrapped: React.ComponentType<P>
) => {
  return (props: P) => {
    const handleCallback = useCallback(() => {
      console.log("hola callback");
    }, []);

    return (
      <div>
        <ConcatComponent text={props.text} onCallback={handleCallback} />
        <RenderPropsComponent>{(text) => <h1>{text}</h1>}</RenderPropsComponent>
        <Wrapped {...(props as P)} />
      </div>
    );
  };
};

export { withFeatureHoc };
