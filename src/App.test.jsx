import { beforeEach, afterEach, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Generates the .toBeInTheDocument helper
import App from './App';

beforeEach(() => {
  window.location.hash = '#/resume';
});

afterEach(() => {
  window.location.hash = '';
});

test('renders the home hero on the default route', () => {
  window.location.hash = '#/';

  render(<App />);
  expect(screen.getByRole('heading', { name: /deep pancholi/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /career highlights/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /leadership approach/i })).toBeInTheDocument();
});

test('renders footer links to LinkedIn, Twitter, and email', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute(
    'href',
    expect.stringMatching(/^mailto:/),
  );
});

test('renders the home page on the root hash route', () => {
  window.location.hash = '#/';

  render(<App />);

  expect(screen.getByRole('heading', { name: /deep pancholi/i })).toBeInTheDocument();
});

test('renders the blog page on the blog route', () => {
  window.location.hash = '#/blog';

  render(<App />);

  expect(screen.getByRole('heading', { name: /notes on technology, life, and everything in between/i })).toBeInTheDocument();
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

test('generates a UUID v4 on the utilities route', async () => {
  window.location.hash = '#/utilities';

  render(<App />);

  expect(screen.getByRole('heading', { name: /utilities/i })).toBeInTheDocument();
  const button = screen.getByRole('button', { name: /generate uuid/i });
  const output = screen.getByRole('status', { name: /generated uuid/i });

  expect(output).toHaveTextContent('Your UUID will appear here');
  fireEvent.click(button);

  expect(output.textContent).toMatch(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );
});
