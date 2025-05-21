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

  describe("ConferenceIntro component", () => {
    it("renders the Learn More link with a valid href", () => {
      render(<ConferenceIntro />);

      const learnMoreLink = screen.getByRole("link", {
        name: /learn more about us/i,
      });

      expect(learnMoreLink).toBeInTheDocument();
      expect(learnMoreLink).toHaveAttribute("href");
      expect(learnMoreLink.getAttribute("href")).not.toBe("");
    });
  });

  it("uses mobile-first flex layout with responsive row on large screens", () => {
    const { container } = render(<ConferenceIntro />);
    const flexWrapper = container.querySelector("div.flex");

    expect(flexWrapper.className).toMatch(/flex-col/);
    expect(flexWrapper.className).toMatch(/lg:flex-row/);
  });
});
