import React from 'react';
import './StyleMyName.scss';

const StyleMyName = ({ text }) => {
  return (
    <h1 className="StyleMyName">
      {text.split('').map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </h1>
  );
};

export default StyleMyName;
