import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/header";

describe("Header Component", () => {
  it("renders the header logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("Header Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders all top-level nav links on desktop", () => {
    render(<Header />);
    expect(screen.getByText("Faq")).toBeInTheDocument();
    expect(screen.getByText("Attend")).toBeInTheDocument();
    expect(screen.getByText("Sponsors")).toBeInTheDocument();
    expect(screen.getByText("Speakers")).toBeInTheDocument();
    expect(screen.getByText("Session Catalog")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("shows mobile menu when hamburger icon is clicked", () => {
    render(<Header />);
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    const faqLinks = screen.getAllByText("Faq");
    expect(faqLinks[1]).toBeVisible();
    expect(document.body.classList.contains("overflow-hidden")).toBe(true);
  });

  it("closes mobile menu on second click", () => {
    render(<Header />);
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);
    expect(document.body.classList.contains("overflow-hidden")).toBe(false);
  });

  it("closes mobile menu when a nav link is clicked", () => {
    render(<Header />);
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    const mobileLink = screen.getAllByText("Faq")[1]; // second is mobile
    fireEvent.click(mobileLink);
    expect(document.body.classList.contains("overflow-hidden")).toBe(false);
  });

  it("renders submenu items for sponsors", () => {
    render(<Header />);
    expect(screen.getByText("Sponsor Benefits")).toBeInTheDocument();
    expect(screen.getByText("Sponsor Packages")).toBeInTheDocument();
  });

  it("renders submenu items for speakers", () => {
    render(<Header />);
    expect(screen.getByText("Keynotes")).toBeInTheDocument();
    expect(screen.getByText("Speaker List")).toBeInTheDocument();
  });

  it("has correct hrefs for all links", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
  });
});
