import { beforeEach, afterEach, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

function navigateTo(path) {
  window.history.pushState({}, '', path);
}

beforeEach(() => {
  navigateTo('/resume');
  vi.stubGlobal('scrollTo', vi.fn());
});

afterEach(() => {
  navigateTo('/');
  vi.unstubAllGlobals();
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
  navigateTo('/contact');

  render(<App />);

  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/details/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your contact info/i)).toBeInTheDocument();
});

test('generates a UUID v4 on the utilities route', async () => {
  navigateTo('/utilities');

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

test('copies the generated UUID from the utilities route', async () => {
  navigateTo('/utilities');

  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.assign(navigator, { clipboard: { writeText } });
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /generate uuid/i }));
  const output = screen.getByRole('status', { name: /generated uuid/i });
  fireEvent.click(screen.getByRole('button', { name: /copy generated uuid/i }));

  expect(writeText).toHaveBeenCalledWith(output.textContent);
});

test('renders the blog post matching the slug route', () => {
  navigateTo('/blog/why-games-expire-consumer-rights-in-gaming');

  render(<App />);

  expect(
    screen.getByRole('heading', { name: /why games expire: consumer rights in gaming/i }),
  ).toBeInTheDocument();
});

test('scrolls to the top when opening a blog post', () => {
  navigateTo('/blog/why-games-expire-consumer-rights-in-gaming');

  render(<App />);

  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
});

test('sets a post-specific document title on the blog post route', () => {
  navigateTo('/blog/why-games-expire-consumer-rights-in-gaming');

  render(<App />);

  expect(document.title).toBe('Why Games Expire: Consumer Rights in Gaming | Deep Pancholi');
  expect(document.querySelector('meta[name="description"]').getAttribute('content')).toContain(
    'Modern games can disappear',
  );
  expect(document.querySelector('link[rel="canonical"]').getAttribute('href')).toBe(
    'https://deepintheai.com/blog/why-games-expire-consumer-rights-in-gaming',
  );
});
