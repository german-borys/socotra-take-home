import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import AppContext from '../store';

// Mock any child components Navbar might use, if needed
// jest.mock('./SomeChild', () => () => <div>SomeChild</div>);

function renderWithContext() {
  return render(
    <AppContext>
      <Navbar />
    </AppContext>
  );
}

describe('Navbar', () => {
  it('renders navigation buttons', () => {
    renderWithContext();
    // Adjust these selectors/texts to match your actual Navbar implementation
    expect(screen.getByRole('button', { name: /Continue|Submit Application/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Previous|back/i })).toBeInTheDocument();
  });

  it('calls nextStep when Next button is clicked', () => {
    // You may need to mock useApplicationApi if Navbar uses it
    const nextStep = jest.fn();
    jest.spyOn(require('../store'), 'useApplicationApi').mockReturnValue({
      nextStep,
      prevStep: jest.fn(),
      submitApplication: jest.fn(),
      updateApplication: jest.fn(),
    });

    renderWithContext();
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    expect(nextStep).toHaveBeenCalled();
  });

  it('calls prevStep when Previous button is clicked', () => {
    const prevStep = jest.fn();
    jest.spyOn(require('../store'), 'useApplicationApi').mockReturnValue({
      nextStep: jest.fn(),
      prevStep,
      submitApplication: jest.fn(),
      updateApplication: jest.fn(),
    });

    renderWithContext();
    fireEvent.click(screen.getByRole('button', { name: /previous|back/i }));
    expect(prevStep).toHaveBeenCalled();
  });
});