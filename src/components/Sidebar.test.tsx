import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import AppContext from '../store';

// Mock any child components Sidebar might use, if needed
// jest.mock('./SomeChild', () => () => <div>SomeChild</div>);

function renderWithContext() {
  return render(
    <AppContext>
      <Sidebar />
    </AppContext>
  );
}

describe('Sidebar', () => {
  it('renders Sidebar content', () => {
    renderWithContext();
    // Replace the text below with something unique from your Sidebar
    expect(screen.getByText(/Quote Progress/i)).toBeInTheDocument();
  });
});