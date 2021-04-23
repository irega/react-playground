import { State } from "./LazyComponent";

type Action = { type: "change"; field: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "change": {
      return { ...state, [action.field]: state[action.field] + "x" };
    }
    default: {
      return { ...state };
    }
  }
};

export { reducer };
