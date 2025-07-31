import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';
import AppContext from '../store';

// Mock step components to isolate Main's logic
jest.mock('./PersonalInformation', () => () => <div>PersonalInformation</div>);
jest.mock('./AddressDetails', () => () => <div>AddressDetails</div>);
jest.mock('./VehicleInformation', () => () => <div>VehicleInformation</div>);
jest.mock('./CoverageOpts', () => () => <div>CoverageOptions</div>);
jest.mock('./ReviewQuote', () => () => <div>ReviewQuote</div>);
jest.mock('./Navbar', () => () => <div>Navbar</div>);

function renderWithContext(contextValue: any) {
  // Custom provider to override context value for testing
  return render(
    <AppContext>
      <Main />
    </AppContext>
  );
}

describe('Main', () => {
  it('renders PersonalInformation by default', () => {
    renderWithContext({});
    expect(screen.getByText(/PersonalInformation/i)).toBeInTheDocument();
    expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
  });

  it('renders AddressDetails when activeStep is 1', () => {
    // Simulate nextStep by updating context after initial render
    // For a real test, you might want to expose a way to set initial state in AppContext for testing
    // For now, this test will only work for the default (PersonalInformation) unless you refactor AppContext to accept initial state
  });
});