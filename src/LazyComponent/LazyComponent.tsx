import { useReducer } from "react";
import { reducer } from "./oneTwoReducer";

export type State = {
  one: string;
  two: string;
} & { [key: string]: string };

const initialState: State = {
  one: "one",
  two: "two",
};

const LazyComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Lazy</h1>
      <button onClick={() => dispatch({ type: "change", field: "one" })}>
        {state.one}
      </button>
      <button onClick={() => dispatch({ type: "change", field: "two" })}>
        {state.two}
      </button>
    </>
  );
};

export default LazyComponent;
