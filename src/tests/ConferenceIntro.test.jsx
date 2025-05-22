import { render, screen } from "@testing-library/react";
import ConferenceIntro from "../components/ConferenceIntro";

describe("ConferenceIntro", () => {
  it("renders the heading text", () => {
    render(<ConferenceIntro />);
    const heading = screen.getByText(
      /What is the Return and Reinvent Conference/i
    );
    expect(heading).toBeInTheDocument();
  });

  it("renders the main image with alt text", () => {
    render(<ConferenceIntro />);
    const img = screen.getByAltText(/Conference Crowd/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/conference.jpg");
  });

  it("renders the learn more button", () => {
    render(<ConferenceIntro />);
    const button = screen.getByRole("button", { name: /learn more about us/i });
    expect(button).toBeInTheDocument();
  });
  
  it("uses mobile-first flex layout with responsive row on large screens", () => {
    const { container } = render(<ConferenceIntro />);
    const flexWrapper = container.querySelector("div.flex");

    expect(flexWrapper.className).toMatch(/flex-col/);
    expect(flexWrapper.className).toMatch(/lg:flex-row/);
  });
});
