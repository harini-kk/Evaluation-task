import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders the logo with alt text', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Return and Reinvent Conference Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders all social media icons with correct alt text', () => {
    render(<Footer />);
    expect(screen.getByAltText(/Facebook logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Instagram logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/LinkedIn logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Youtube logo/i)).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/HealNet 2024 © All Rights Reserved/i)).toBeInTheDocument();
  });
});
