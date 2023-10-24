import React from 'react'; 

export const Timeline = ({ size = 400, color = 'black' }) => {
    return (
      <svg width={size} height={size/2} viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          {/* Main Horizontal Line */}
          <line x1="10" y1="200" x2="790" y2="200" stroke={color} />
  
          {/* Event 1 */}
          <line x1="150" y1="200" x2="150" y2="100" stroke={color} />
          <line x1="150" y1="100" x2="250" y2="100" stroke={color} />
  
          {/* Event 2 */}
          <line x1="300" y1="200" x2="300" y2="300" stroke={color} />
          <line x1="300" y1="300" x2="450" y2="300" stroke={color} />
  
          {/* Event 3 */}
          <line x1="500" y1="200" x2="500" y2="100" stroke={color} />
          <line x1="500" y1="100" x2="600" y2="100" stroke={color} />
  
          {/* Event 4 */}
          <line x1="650" y1="200" x2="650" y2="300" stroke={color} />
          <line x1="650" y1="300" x2="750" y2="300" stroke={color} />
  
          {/* Event 5 */}
          <line x1="720" y1="200" x2="720" y2="150" stroke={color} />
          <line x1="720" y1="150" x2="790" y2="150" stroke={color} />
      </svg>
    );
  }