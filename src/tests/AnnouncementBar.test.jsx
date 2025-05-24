import { render, screen } from '@testing-library/react';
import AnnouncementBar from '../components/announcementBar';

describe('AnnouncementBar', () => {
  it('renders the announcement text', () => {
    render(<AnnouncementBar />);
    const text = screen.getByText(/Breakpoint 2023 - New City. New Vibes/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('text-center');
    expect(text).toHaveClass('uppercase');
  });

  it('has the correct background gradient style', () => {
    const { container } = render(<AnnouncementBar />);
    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toHaveStyle({
      background: 'linear-gradient(260.33deg, #F1A038 -13.37%, #FB4A64 109.53%)',
    });
  });
});
