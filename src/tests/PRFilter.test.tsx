
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import PRFilter from "../components/PRFilter";
import { Label } from "../types";

const mockLabels: Label[] = [
  { id: 1, name: "bug" },
  { id: 2, name: "feature" }
];

test("renders filter buttons", () => {
  render(<PRFilter labels={mockLabels} selectedLabel="bug" onSelectLabel={() => {}} onReset={() => {}} />);
  expect(screen.getByText("bug")).toBeInTheDocument();
  expect(screen.getByText("feature")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /reset filter/i })).toBeInTheDocument();
});

test("calls onSelectLabel when a button is clicked", () => {
  const mockOnSelect = vi.fn();
  render(<PRFilter labels={mockLabels} selectedLabel="" onSelectLabel={mockOnSelect} onReset={() => {}} />);
  fireEvent.click(screen.getByText("bug"));
  expect(mockOnSelect).toHaveBeenCalledWith("bug");
});

test("calls onReset when reset button is clicked", () => {
  const mockOnReset = vi.fn();
  render(<PRFilter labels={mockLabels} selectedLabel="bug" onSelectLabel={() => {}} onReset={mockOnReset} />);
  fireEvent.click(screen.getByRole("button", { name: /reset filter/i }));
  expect(mockOnReset).toHaveBeenCalled();
});
