import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

export default function AboutSection({ title, summary, list }) {
  const [isListVisible, setIsListVisible] = useState(false);
  
  const handleToggleList = () => {
    setIsListVisible(!isListVisible);
  };

  const buttonText = isListVisible ? 'Show Less' : 'Show More';

  return (
    <div className="about-card">
      <h3>{title}</h3>
      <p className="card-summary">{summary}</p>
      
      {isListVisible && list && list.length > 0 && (
        <ul className="card-list">
          {list.map((item, index) => (
            <li key={index} className="skill-item">
              {/* Check if the item is a skill object with a 'level' property */}
              {typeof item === 'object' && item.level !== undefined ? (
                <div className="skill-wrapper">
                  <span>{item.name}</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${item.level}%` }}>
                      <span className="level-text">{item.level}%</span>
                    </div>
                  </div>
                  <div className="fun-fact">{item.funFact}</div>
                </div>
              ) : (
                // If not a skill object, render the item as a simple string
                <div className="list-item-wrapper">
                  <span>{item}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {list && list.length > 0 && (
        <ToggleButton onClick={handleToggleList} text={buttonText} />
      )}
    </div>
  );
}