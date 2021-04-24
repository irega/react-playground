import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useCheck } from "./useCheck";

test("should update the check state", () => {
  const { result } = renderHook(() => useCheck());

  act(() => {
    result.current.setCheckState("my check status");
  });

  expect(result.current.checkState).toEqual("my check status");
});
