import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Generates the .toBeInTheDocument helper
import App from './App';

test('renders linkedin link', () => {
  render(<App />);
  const linkElement = screen.getByText(/LinkedIn/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});