import { fireEvent, render } from "@testing-library/react";
import LazyComponent from "./LazyComponent";

test("renders the one prop", () => {
  const { getByText } = render(<LazyComponent />);
  const prop = getByText("one");
  expect(prop).toBeTruthy();
});

test("changes the one prop", () => {
  const { getByTestId, getByText } = render(<LazyComponent />);

  const button = getByTestId("oneButton");
  fireEvent.click(button);

  const prop = getByText("onex");
  expect(prop).toBeTruthy();
});
