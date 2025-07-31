import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonalInformation from './PersonalInformation';
import AppContext from '../store';

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