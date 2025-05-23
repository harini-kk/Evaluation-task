import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from '../components/ReservationForm';

describe('ReservationForm', () => {
  it('shows success message on valid email and phone', () => {
    render(<ReservationForm />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '+1234567890' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));
    expect(screen.getByText('Reservation Confirmed!')).toBeInTheDocument();
  });

  it('shows error for invalid email', () => {
    render(<ReservationForm />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'user@.com' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '+1234567890' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
  });

  it('shows error for invalid phone number', () => {
    render(<ReservationForm />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: 'abc123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));
    expect(screen.getByText('Enter a valid phone number')).toBeInTheDocument();
  });

  it('shows errors for both invalid email and phone', () => {
    render(<ReservationForm />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'invalid' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: 'abc' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid phone number')).toBeInTheDocument();
  });

  it('shows errors when both fields are empty', () => {
    render(<ReservationForm />);
    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid phone number')).toBeInTheDocument();
  });

  it('clears success message when input changes', () => {
    render(<ReservationForm />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '+1234567890' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Reserve Now/i }));
    expect(screen.getByText('Reservation Confirmed!')).toBeInTheDocument();

    // Change email again
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'new@example.com' },
    });
    expect(screen.queryByText('Reservation Confirmed!')).not.toBeInTheDocument();
  });
});
