import React from "react";
import { RenderPropsComponent } from "../RenderPropsComponent/RenderPropsComponent";
import { ConcatComponent } from "./ConcatComponent";

export interface WithFeatureProps {
  text: string;
}

const withFeatureHoc = <P extends WithFeatureProps>(
  Wrapped: React.ComponentType<P>
) => {
  return (props: P) => {
    return (
      <div>
        <ConcatComponent text={props.text} />
        <RenderPropsComponent>{(text) => <h1>{text}</h1>}</RenderPropsComponent>
        <Wrapped {...(props as P)} />
      </div>
    );
  };
};

export { withFeatureHoc };
