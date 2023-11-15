import { render, screen } from "@testing-library/react";
import App from "./App";
import { StaticRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <StaticRouter location="/alchemists">
      <App />
    </StaticRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
