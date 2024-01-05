import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("should contains the heading", () => {
    render(<Header />);

    // Use assertions to test if the component renders as expected
    expect(
      screen.getByText("Sort & filter your hotel search with ease")
    ).toBeInTheDocument();
  });
});
