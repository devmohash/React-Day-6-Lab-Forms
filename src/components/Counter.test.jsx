import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test(" User should see default value of counter = 0", () => {
  render(<Counter></Counter>);
  const counterText = screen.getByText("0");
  expect(counterText).toBeInTheDocument();
});

test(" User should see increament button", () => {
  render(<Counter></Counter>);
  const increamentBtn = screen.getByRole("button", { name: "+" });
  expect(increamentBtn).toBeInTheDocument();
  expect(increamentBtn).toBeEnabled();
});

test(" User should see decrement button", () => {
  render(<Counter></Counter>);
  const decrementBtn = screen.getByRole("button", { name: "-" });
  expect(decrementBtn).toBeInTheDocument();
  expect(decrementBtn).toBeEnabled();
});

test("when + button pressed the count value should be increased ", () => {
  render(<Counter></Counter>);
  const counterText = screen.getByText("0");
  expect(counterText).toBeInTheDocument();
  expect(counterText).toHaveTextContent("0");
  const increamentBtn = screen.getByRole("button", { name: "+" });
  fireEvent.click(increamentBtn);
  expect(counterText).toHaveTextContent("1");
});

test("when -  button pressed the count value should be decreased ", () => {
  render(<Counter></Counter>);
  const counterText = screen.getByText("0");
  expect(counterText).toBeInTheDocument();
  expect(counterText).toHaveTextContent("0");
  const decrementBtn = screen.getByRole("button", { name: "-" });
  fireEvent.click(decrementBtn);
  expect(counterText).toHaveTextContent("0");
});
