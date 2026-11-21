import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { readFileSync } from 'node:fs';
import App from './App';

const { toDataURL } = vi.hoisted(() => ({ toDataURL: vi.fn() }));
vi.mock('qrcode', () => ({ default: { toDataURL } }));

function navigateTo(path) {
  window.history.pushState({}, '', path);
}

beforeEach(() => {
  navigateTo('/');
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
  navigateTo('/');
  vi.restoreAllMocks();
});

test('renders the portfolio homepage and metadata on the root route', async () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /deep pancholi/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /career highlights/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /leadership approach/i })).toBeInTheDocument();
  await waitFor(() => expect(document.title).toBe('Deep Pancholi | Engineering Leader'));
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://deepintheai.com/',
  );
});

test('shows accessible social links under the homepage portrait', () => {
  render(<App />);

  const portrait = screen.getByRole('img', { name: 'Deep Pancholi' });
  expect(portrait).toHaveAttribute('src', '/profile.jpg');
  const photo = readFileSync('public/profile.jpg');
  expect(photo.subarray(0, 2)).toEqual(Buffer.from([0xff, 0xd8]));
  expect(photo.length).toBeGreaterThan(10000);

  expect(screen.getByRole('link', { name: /deep pancholi on linkedin/i })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/deeppancholi/',
  );
  expect(screen.getByRole('link', { name: /deep pancholi on twitter/i })).toHaveAttribute(
    'href',
    'https://x.com/DPancs',
  );
  expect(screen.getByRole('link', { name: /dpancholi@duck.com/i })).toHaveAttribute(
    'href',
    'mailto:dpancholi@duck.com',
  );
});

test('renders the shared footer links with the confirmed email address', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/deeppancholi/',
  );
  expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
    'href',
    'https://x.com/DPancs',
  );
  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
    'href',
    'mailto:dpancholi@duck.com',
  );
});

test('renders Blog at the clean /blog route', async () => {
  navigateTo('/blog');
  render(<App />);

  expect(screen.getByRole('heading', { name: /notes on technology, life, and everything in between/i })).toBeInTheDocument();
  await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://deepintheai.com/blog',
  ));
});

test('renders a blog post at its clean slug route', () => {
  navigateTo('/blog/why-games-expire-consumer-rights-in-gaming');
  render(<App />);

  expect(screen.getByRole('heading', { name: /why games expire: consumer rights in gaming/i })).toBeInTheDocument();
});

test('renders Resume and Contact on their clean routes', () => {
  navigateTo('/resume');
  const { unmount } = render(<App />);
  expect(screen.getByRole('heading', { name: /deep pancholi/i })).toBeInTheDocument();
  unmount();

  navigateTo('/contact');
  render(<App />);
  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/details/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your contact info/i)).toBeInTheDocument();
});

test('generates and copies a UUID v4 on the clean /utilities route', async () => {
  navigateTo('/utilities');
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  });
  render(<App />);

  expect(screen.getByRole('heading', { name: /utilities/i })).toBeInTheDocument();
  const generateButton = screen.getByRole('button', { name: /generate uuid/i });
  const output = screen.getByRole('status', { name: /generated uuid/i });
  expect(output).toHaveTextContent('Your UUID will appear here');

  fireEvent.click(generateButton);
  expect(output.textContent).toMatch(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );
  fireEvent.click(screen.getByRole('button', { name: /copy generated uuid/i }));
  await waitFor(() => expect(writeText).toHaveBeenCalledWith(output.textContent));
  expect(screen.getByText('Copied')).toBeInTheDocument();
});

test('keeps the lossless image compressor on the Utilities route', () => {
  navigateTo('/utilities');
  render(<App />);

  expect(screen.getByText(/lossless image compressor/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose png or svg/i)).toBeInTheDocument();
});

test('generates and downloads a QR code from entered text', async () => {
  navigateTo('/utilities');
  const qrData = 'data:image/png;base64,ZmFrZQ==';
  toDataURL.mockReset().mockResolvedValue(qrData);
  render(<App />);

  fireEvent.change(screen.getByLabelText(/text or url/i), {
    target: { value: 'https://example.com' },
  });
  fireEvent.click(screen.getByRole('button', { name: /generate qr code/i }));

  expect(await screen.findByRole('img', { name: /generated qr code/i })).toHaveAttribute(
    'src',
    qrData,
  );
  expect(screen.getByRole('link', { name: /download png/i })).toHaveAttribute(
    'download',
    'qr-code.png',
  );
  expect(toDataURL).toHaveBeenCalledWith(
    'https://example.com',
    expect.objectContaining({ width: 256, errorCorrectionLevel: 'M' }),
  );
});

test('shows a message when QR generation is requested with empty input', async () => {
  navigateTo('/utilities');
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /generate qr code/i }));

  expect(await screen.findByText(/enter text or a url to create a qr code/i)).toBeInTheDocument();
});

test('GitHub Pages deep-link redirect and path restoration remain configured', () => {
  const indexHtml = readFileSync('index.html', 'utf8');
  const notFoundHtml = readFileSync('public/404.html', 'utf8');

  expect(notFoundHtml).toContain("'/?/'");
  expect(indexHtml).toContain("location.search[1] === '/'");
});
