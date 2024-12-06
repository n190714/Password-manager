// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
      </div>
      <div>
        <label htmlFor="subscribe">Subscribe</label>
        <input type="checkbox" id="subscribe" />
      </div>
      <button type="button">Submit</button>
      <p>Note: All fields are required.</p>
    </div>
  );
}

export default App;
