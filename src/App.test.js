import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
    render(
        <MemoryRouter initialEntries={["/alchemists"]}>
            <App />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Pick Up Parcel/i);
    expect(linkElement).toBeInTheDocument();
});
