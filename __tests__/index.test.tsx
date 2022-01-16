import { render, screen } from "@testing-library/react";
import Home from "../pages/gr-en";

describe("Home", () => {
  beforeAll(() => {
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
      set: jest.fn(),
    });
  });
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Unlimited movies, TV shows, and more.",
    });

    expect(heading).toBeInTheDocument();
  });
});
