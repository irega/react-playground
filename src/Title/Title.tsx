import {
  withFeatureHoc,
  WithFeatureProps,
} from "../withFeatureHoc/withFeatureHoc";

interface Props extends WithFeatureProps {}

const Title = ({ text }: Props) => {
  return <h1>Original: {text}</h1>;
};

export default withFeatureHoc<Props>(Title);
