import { useState } from 'react';
import './Utilities.css';

function createUuidV4() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  const bytes = new Uint8Array(16);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  return [...bytes]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
    .replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
}

function Utilities() {
  const [uuid, setUuid] = useState('');

  return (
    <main className="utilities-page">
      <section className="utilities-card">
        <p className="resume-eyebrow">Handy tools</p>
        <h1>Utilities</h1>
        <p className="utilities-intro">
          Generate a fresh universally unique identifier whenever you need one.
        </p>

        <div className="uuid-tool">
          <div className="uuid-tool-heading">
            <div>
              <p className="utility-label">UUID v4 generator</p>
              <p className="utility-description">A random identifier for development and testing.</p>
            </div>
            <span className="uuid-version">v4</span>
          </div>

          <button type="button" onClick={() => setUuid(createUuidV4())}>
            Generate UUID
          </button>

          <output className="uuid-output" aria-live="polite" aria-label="Generated UUID">
            {uuid || 'Your UUID will appear here'}
          </output>
        </div>
      </section>
    </main>
  );
}

export default Utilities;
