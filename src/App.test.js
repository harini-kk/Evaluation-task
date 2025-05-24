import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./components/ConferenceIntro', () => ({
  __esModule: true,
  default: function ConferenceIntro() {
    return <div data-testid="conference-intro">Conference Intro Component</div>;
  }
}));

jest.mock('./components/Footer', () => ({
  __esModule: true,
  default: function Footer() {
    return <div data-testid="footer">Footer Component</div>;
  }
}));

jest.mock('./components/header', () => ({
  __esModule: true,
  default: function Header() {
    return <div data-testid="header">Header Component</div>;
  }
}));

jest.mock('./components/HeroSection', () => ({
  __esModule: true,
  default: function HeroSection() {
    return <div data-testid="hero-section">Hero Section Component</div>;
  }
}));

jest.mock('./components/ReservationForm', () => ({
  __esModule: true,
  default: function ReservationForm() {
    return <div data-testid="reservation-form">Reservation Form Component</div>;
  }
}));

jest.mock('./components/WhoShouldAttend', () => ({
  __esModule: true,
  default: function WhoShouldAttend() {
    return <div data-testid="who-should-attend">Who Should Attend Component</div>;
  }
}));

jest.mock('./pages/workPage', () => ({
  __esModule: true,
  default: function WorkPage() {
    return <div data-testid="work-page">Work Page Component</div>;
  }
}));

jest.mock('react-router', () => ({
  BrowserRouter: ({ children }) => <div data-testid="router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: ({ element }) => <div data-testid="route">{element}</div>
}));

jest.mock('./App.css', () => ({}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('router')).toBeInTheDocument();
    expect(screen.getByTestId('routes')).toBeInTheDocument();
  });

  test('renders header and footer', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders home page components by default', () => {
    render(<App />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('conference-intro')).toBeInTheDocument();
    expect(screen.getByTestId('who-should-attend')).toBeInTheDocument();
    expect(screen.getByTestId('reservation-form')).toBeInTheDocument();
  });

  test('has correct CSS class on main div', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
  });
});
