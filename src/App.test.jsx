import { beforeEach, afterEach, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Generates the .toBeInTheDocument helper
import App from './App';

beforeEach(() => {
  window.location.hash = '#/resume';
});

afterEach(() => {
  window.location.hash = '';
});

test('renders linkedin link', () => {
  render(<App />);
  const linkElements = screen.getAllByRole('link', { name: /LinkedIn/i });
  expect(linkElements.length).toBeGreaterThan(0);
});

test('renders Resume link', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /Resume/i })).toBeInTheDocument();
});

test('renders the contact page form fields on the contact route', () => {
  window.location.hash = '#/contact';

  render(<App />);

  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/details/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your contact info/i)).toBeInTheDocument();
});
