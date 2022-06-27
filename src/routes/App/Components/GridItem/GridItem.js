import React from 'react';
import './GridItem.css';

const GridItem = ({ title, amount }) => {
  return (
    <div className="grid-element">
      <p className="grid-element-item">{title}</p>
      <p className="grid-element-item grid-number">{amount}</p>
    </div>
  );
};

export default GridItem;
