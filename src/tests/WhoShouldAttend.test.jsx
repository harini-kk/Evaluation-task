import { render, screen } from '@testing-library/react';
import WhoShouldAttend from '../components/WhoShouldAttend';

describe('WhoShouldAttend Component', () => {
  beforeEach(() => {
    render(<WhoShouldAttend />);
  });

  it('renders the heading with gradient word "Should"', () => {
    const heading = screen.getByRole('heading', { name: /Who Should Attend\?/i });
    expect(heading).toBeInTheDocument();

    const gradientText = screen.getByText('Should');
    expect(gradientText).toBeInTheDocument();
    expect(gradientText).toHaveClass('bg-clip-text', 'text-transparent');
  });

  it('renders the image with correct alt text', () => {
    const image = screen.getByAltText(/Person pointing/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/who-should-attend.png');
  });
});
