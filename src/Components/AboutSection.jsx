import React from 'react';

export default function AboutSection({ title, summary, list }) {
  return (
  
    <div className="about-card">
      <h3>{title}</h3>
      <p className="card-summary">{summary}</p>
      {list && list.length > 0 && (
        <ul className="card-list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>

  );
}