interface Props {
  children(text: string): void;
}

const RenderPropsComponent = (props: Props) => {
  return <>{props.children("render props")}</>;
};

export { RenderPropsComponent };
