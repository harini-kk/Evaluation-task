import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("renders the logo with alt text", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Return and Reinvent Conference Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders all social media icons with correct alt text", () => {
    render(<Footer />);
    expect(screen.getByAltText(/Facebook logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Instagram logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/LinkedIn logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Youtube logo/i)).toBeInTheDocument();
  });

  describe("Footer social media links", () => {
    beforeEach(() => {
      render(<Footer />);
    });

    const links = [
      { label: /Facebook/i, href: "https://www.facebook.com/" },
      { label: /Instagram/i, href: "https://www.instagram.com/" },
      { label: /LinkedIn/i, href: "https://www.linkedin.com/" },
      { label: /YouTube/i, href: "https://www.youtube.com/" },
    ];

    links.forEach(({ label, href }) => {
      it(`has ${label} link that redirects correctly and opens in a new tab`, () => {
        const link = screen.getByLabelText(label);
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", href);
        expect(link).toHaveAttribute("target", "_blank");
      });
    });
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/HealNet 2024 © All Rights Reserved/i)
    ).toBeInTheDocument();
  });
});
