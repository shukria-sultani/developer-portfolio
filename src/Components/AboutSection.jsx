import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

export default function AboutSection({ title, summary, list }) {
  // Each card has its own independent state for its list visibility
  const [isListVisible, setIsListVisible] = useState(false);

  // The function to toggle the state for this specific card
  const handleToggleList = () => {
    setIsListVisible(!isListVisible);
  };

  const buttonText = isListVisible ? 'Show Less' : 'Show More';

  return (
    <div className="about-card">
      <h3>{title}</h3>
      <p className="card-summary">{summary}</p>
      
      {/* Conditionally render the list only when isListVisible is true */}
      {isListVisible && list && list.length > 0 && (
        <ul className="card-list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

  
      {list && list.length > 0 && (
        <ToggleButton onClick={handleToggleList} text={buttonText} />
      )}
    </div>
  );
}