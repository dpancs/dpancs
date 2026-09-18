import { useState } from 'react';
import './Utilities.css';
import { useSeo } from '../seo';

function createUuidV4() {
  return crypto.randomUUID();
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function minifySvg(text) {
  return text
    .replace(/^\uFEFF/, '')
    .replace(/<\?xml[^>]*\?>/gi, '')
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
    .replace(/^\s+|\s+$/g, '');
}

function compressPng(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      canvas.getContext('2d').drawImage(image, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('PNG compression failed.'))), 'image/png');
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('The PNG could not be read.'));
    };
    image.src = url;
  });
}

function downloadFile(blob, name) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function Utilities() {
  const [uuid, setUuid] = useState('');
  const [copied, setCopied] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressionStatus, setCompressionStatus] = useState('');
  const [isCompressing, setIsCompressing] = useState(false);
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
          A few focused tools for everyday software engineering tasks.
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

        <div className="image-tool">
          <div className="utility-heading">
            <div>
              <p className="utility-label">Lossless image compressor</p>
              <p className="utility-description">Reduce PNG or SVG size in your browser. Your image stays on your device.</p>
            </div>
          </div>

          <label className="file-picker">
            Choose PNG or SVG
            <input
              type="file"
              accept="image/png,image/svg+xml,.png,.svg"
              onChange={async ({ target }) => {
                const file = target.files[0];
                if (!file) return;

                setIsCompressing(true);
                setCompressedFile(null);
                setCompressionStatus('Compressing…');
                try {
                  const blob = file.type === 'image/svg+xml'
                    ? new Blob([minifySvg(await file.text())], { type: 'image/svg+xml' })
                    : await compressPng(file);
                  const result = blob.size < file.size ? blob : file;
                  setCompressedFile({ blob: result, name: file.name, originalSize: file.size });
                  setCompressionStatus(
                    result.size < file.size
                      ? `${formatBytes(file.size)} → ${formatBytes(result.size)} (${Math.round((1 - result.size / file.size) * 100)}% smaller)`
                      : 'This file is already smaller than the lossless result.',
                  );
                } catch (error) {
                  setCompressionStatus(error.message);
                } finally {
                  setIsCompressing(false);
                  target.value = '';
                }
              }}
            />
          </label>

          <span className="compression-status" aria-live="polite">
            {compressionStatus}
          </span>
          {compressedFile && (
            <button
              type="button"
              disabled={isCompressing}
              onClick={() => downloadFile(compressedFile.blob, compressedFile.name)}
            >
              Download compressed file
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Utilities;
