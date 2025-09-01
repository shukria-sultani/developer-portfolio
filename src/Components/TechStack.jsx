import { ul } from 'framer-motion/client';
import React from 'react';


function TechStack({ techList }) {
  return (
    <div className="tech-stack-container">
      {techList.map((tech, index) => (
        <ul>
            <li key={index} className='tech-badge'>{tech}</li>
        </ul>
      ))}
    </div>
  );
}

export default TechStack;