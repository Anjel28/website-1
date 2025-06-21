import React from 'react';


import PropTypes from 'prop-types';
import './Skills.css'; // Optional styling file

const Skill = ({ name, level, icon }) => {
  // Define color based on skill level (optional)
  const getColor = () => {
    if (level >= 80) return '#4CAF50'; // Green for expert
    if (level >= 60) return '#2196F3'; // Blue for advanced
    if (level >= 40) return '#FFC107'; // Yellow for intermediate
    return '#F44336'; // Red for beginner
  };

  return (
    <div className="skill-item">
      <div className="skill-header">
        {icon && <div className="skill-icon">{icon}</div>}
        <h3 className="skill-name">{name}</h3>
        <span className="skill-percent">{level}%</span>
      </div>
      
      <div className="skill-progress-container">
        <div 
          className="skill-progress-bar" 
          style={{
            width: `${level}%`,
            backgroundColor: getColor()
          }}
        ></div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  icon: PropTypes.element
};

export default Skill;