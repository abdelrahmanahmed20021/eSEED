import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import View from "./View";

describe("View Component", () => {
  test("renders the component", () => {
    render(<View />);
    // Verify that the component is rendered
    expect(screen.getByRole("section")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Hide Box One")).toBeInTheDocument();
    expect(screen.getByLabelText("Hide Box Two")).toBeInTheDocument();
    expect(screen.getByText("Hide/Add - Boxes")).toBeInTheDocument();
  });

  test("toggles between view and edit modes", () => {
    render(<View />);
    const toggleButton = screen.getByRole("button");

    // Verify the initial view mode
    expect(screen.getByLabelText("Hide Box One")).toBeChecked();
    expect(screen.getByLabelText("Hide Box Two")).toBeChecked();

    // Simulate click on the toggle button
    fireEvent.click(toggleButton);

    // Verify the edit mode
    expect(screen.getByLabelText("Hide Box One")).not.toBeChecked();
    expect(screen.getByLabelText("Hide Box Two")).not.toBeChecked();

    // Simulate another click on the toggle button
    fireEvent.click(toggleButton);

    // Verify the view mode is restored
    expect(screen.getByLabelText("Hide Box One")).toBeChecked();
    expect(screen.getByLabelText("Hide Box Two")).toBeChecked();
  });

  test("hides and shows boxes", () => {
    render(<View />);
    const hideBoxOneCheckbox = screen.getByLabelText("Hide Box One");
    const hideBoxTwoCheckbox = screen.getByLabelText("Hide Box Two");

    // Simulate click on the "Hide Box One" checkbox
    fireEvent.click(hideBoxOneCheckbox);

    // Verify that Box One (LineChart) is hidden
    expect(screen.queryByLabelText("Line Chart")).not.toBeInTheDocument();

    // Simulate click on the "Hide Box Two" checkbox
    fireEvent.click(hideBoxTwoCheckbox);

    // Verify that Box Two (BarChart) is hidden
    expect(screen.queryByLabelText("Bar Chart")).not.toBeInTheDocument();

    // Simulate click on the "Hide Box One" checkbox again to unhide Box One
    fireEvent.click(hideBoxOneCheckbox);

    // Verify that Box One (LineChart) is visible again
    expect(screen.getByLabelText("Line Chart")).toBeInTheDocument();

    // Simulate click on the "Hide Box Two" checkbox again to unhide Box Two
    fireEvent.click(hideBoxTwoCheckbox);

    // Verify that Box Two (BarChart) is visible again
    expect(screen.getByLabelText("Bar Chart")).toBeInTheDocument();
  });

  // Add more test cases for other functionalities and scenarios
});
