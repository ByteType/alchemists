import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import CodeBox from "../components/HomePage/CodeBox";

describe("CodeBox", () => {
  test("renders CodeBox Dom", () => {
    render(<CodeBox />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test("renders CodeBox", () => {
    render(<CodeBox />);

    const title = screen.getByText("Pick Up Parcel");
    expect(title).toBeInTheDocument();

    const codeInput = screen.getAllByRole("textbox");
    expect(codeInput).toHaveLength(4);

    //renders select element
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const toggleText = screen.getByText("Delivery now!");
    expect(toggleText).toBeInTheDocument();

    const codeButton = screen.getByRole("button");
    expect(codeButton).toBeInTheDocument();
  });

  test("user input", async () => {
    render(<CodeBox />);

    const inputs = screen.getAllByRole("textbox");
    const inputValues = ["1", "2", "3", "4"];

    for (let i = 0; i < inputs.length; i++) {
      await user.type(inputs[i], inputValues[i]);
    }

    inputs.forEach((input, index) => {
      expect(input).toHaveValue(inputValues[index]);
    });
  });

  test("switch to Delivery", async () => {
    render(<CodeBox />);
    const toDeliveryButton = screen.getByTestId("toDeliveryButton");
    user.click(toDeliveryButton);

    await waitFor(() => {
      expect(screen.queryByText("Pick Up Parcel")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      const toggleText = screen.getByText("Pick up now!");
      expect(toggleText).toBeInTheDocument();
    });
  });
});
