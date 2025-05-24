import { render, screen } from '@testing-library/react';
import LogoTextSlider from '../components/logoSlider';

jest.mock('react-slick', () => {
  return function MockSlider({ children, ...props }) {
    return (
      <div data-testid="slider" data-slider-props={JSON.stringify(props)}>
        {children}
      </div>
    );
  };
});

describe('LogoTextSlider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<LogoTextSlider />);
    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });

  test('renders all 6 logo images', () => {
    render(<LogoTextSlider />);
    for (let i = 1; i <= 6; i++) {
      const logo = screen.getByAltText(`Logo ${i}`);
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', `/logos/logo${i}.png`);
      expect(logo).toHaveClass('h-14');
    }
  });

  test('configures slider with correct settings', () => {
    render(<LogoTextSlider />);
    
    const slider = screen.getByTestId('slider');
    const sliderProps = JSON.parse(slider.getAttribute('data-slider-props'));
    
    expect(sliderProps.slidesToShow).toBe(5);
    expect(sliderProps.slidesToScroll).toBe(1);
    expect(sliderProps.autoplay).toBe(true);
    expect(sliderProps.autoplaySpeed).toBe(2000);
    expect(sliderProps.infinite).toBe(true);
    expect(sliderProps.arrows).toBe(false);
    expect(sliderProps.dots).toBe(false);
    expect(sliderProps.centerMode).toBe(true);
    expect(sliderProps.centerPadding).toBe('10%');
    expect(sliderProps.initialSlide).toBe(0);
  });

  test('all images have proper accessibility attributes', () => {
    render(<LogoTextSlider />);
    
    for (let i = 1; i <= 6; i++) {
      const logo = screen.getByAltText(`Logo ${i}`);
      expect(logo).toHaveAttribute('alt', `Logo ${i}`);
      expect(logo.tagName).toBe('IMG');
    }
  });
});
