import React from 'react';
import './App.css';
import URLShortener from './components/URLShortener';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <h1 className="main-title">URL Shortener</h1>
        <URLShortener />
      </div>
    </div>
  );
}

export default App;
