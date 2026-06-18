import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Generates the .toBeInTheDocument helper
import App from './App';

test('renders linkedin link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Deep Pancholi LinkedIn/i);
  expect(linkElement).toBeInTheDocument();
});
