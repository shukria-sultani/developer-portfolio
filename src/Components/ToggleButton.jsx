// ToggleButton.js
import React from 'react';

export default function ToggleButton({ text, onClick }) {
  return (
    <button className="toggle-button" onClick={onClick}>
      {text}
    </button>
  );
}