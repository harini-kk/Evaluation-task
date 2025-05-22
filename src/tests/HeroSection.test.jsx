import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection"; // adjust path as needed

describe("HeroSection", () => {

  it("renders event details (date, time, location)", () => {
    render(<HeroSection />);
    expect(screen.getByText("22/2/2022")).toBeInTheDocument();
    expect(screen.getByText("10:00am")).toBeInTheDocument();
    expect(
      screen.getByText(/Chicago Convention Center, Chicago, IL/i)
    ).toBeInTheDocument();
  });

  it("renders reservation button with label", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("button", { name: /Book Your Reservation/i })
    ).toBeInTheDocument();
  });

  it("renders speaker image with correct alt", () => {
    render(<HeroSection />);
    const img = screen.getByAltText("Conference Speaker");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/speaker-woman.png");
  });

  it("renders background line image with aria-hidden", () => {
    render(<HeroSection />);
    const bg = screen.getByAltText("Decorative Background Line");
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute("aria-hidden", "true");
  });

});
