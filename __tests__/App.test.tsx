import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../src/components/App";

test("shows the children when the checkbox is checked", () => {
    const testMessage = "Test Message";
    render(<App title={testMessage} number={42} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
});