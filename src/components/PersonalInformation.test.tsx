import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonalInformation from './PersonalInformation';
import AppContext from '../store';

// Mock any child components PersonalInformation might use, if needed
// jest.mock('./SomeChild', () => () => <div>SomeChild</div>);

function renderWithContext() {
  return render(
    <AppContext>
      <PersonalInformation />
    </AppContext>
  );
}

describe('PersonalInformation', () => {
  it('renders PersonalInformation content', () => {
    renderWithContext();
    // Replace the text below with something unique from your PersonalInformation component
    expect(screen.getByText(/firstName|lastName|dob|phone/i)).toBeInTheDocument();
  });
});