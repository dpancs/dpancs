import { useState } from 'react';
import './Utilities.css';
import { useSeo } from '../seo';

function createUuidV4() {
  return crypto.randomUUID();
}

function Utilities() {
  const [uuid, setUuid] = useState('');
  const [copied, setCopied] = useState(false);
  useSeo({
    title: 'UUID Generator & Developer Utilities | Deep Pancholi',
    description:
      'Free developer utilities by Deep Pancholi: generate UUID v4 identifiers and more handy tools for everyday software engineering tasks.',
    path: '/utilities',
  });

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

          <button
            type="button"
            onClick={() => {
              setUuid(createUuidV4());
              setCopied(false);
            }}
          >
            Generate UUID
          </button>

          <div className="uuid-output-row">
            <output className="uuid-output" aria-live="polite" aria-label="Generated UUID">
              {uuid || 'Your UUID will appear here'}
            </output>
            <button
              className="copy-button"
              type="button"
              aria-label="Copy generated UUID"
              title="Copy generated UUID"
              disabled={!uuid}
              onClick={async () => {
                await navigator.clipboard.writeText(uuid);
                setCopied(true);
              }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="13" height="13" x="9" y="9" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
          <span className="copy-status" aria-live="polite">
            {copied ? 'Copied' : ''}
          </span>
        </div>
      </section>
    </main>
  );
}

export default Utilities;
