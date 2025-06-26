import React, { useState } from 'react';
import './URLShortener.css';

const URLShortener = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated short URL (replace with API call later)
    const fakeShort = 'https://short.ly/' + Math.random().toString(36).substring(2, 8);
    setShortURL(fakeShort);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortURL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="shortener-container">
      <h2 className="title">🔗 Shorten Your URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter your URL"
          value={originalURL}
          onChange={(e) => setOriginalURL(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {shortURL && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortURL} target="_blank" rel="noopener noreferrer">
            {shortURL}
          </a>
          <br />
          <button onClick={copyToClipboard} className="copy-btn">📋 Copy</button>
          {copied && <span className="copied-msg">Copied!</span>}
        </div>
      )}
    </div>
  );
};

export default URLShortener;
