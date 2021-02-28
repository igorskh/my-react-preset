import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Sample from "../src/components/Sample";

test("shows the children when the checkbox is checked", () => {
    const testMessage = "Test Message";
    render(<Sample title={testMessage} number={42} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
});