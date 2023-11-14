import React from 'react';

const GridViewToggle = ({ isGrid, toggleGrid }) => {
  return (
    <button onClick={toggleGrid}>
      {isGrid ? 'Switch to List View' : 'Switch to Grid View'}
    </button>
  );
};

export default GridViewToggle;