import React, { useState } from 'react';
import NewsList from '../components/NewsList';
import styles from '../styles/Home.module.css'; 

const Home = () => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleGrid = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>News App</h1>
      </div>
      <button className={styles['toggle-button']} onClick={toggleGrid}>
        {isGrid ? 'Switch to Grid View' : 'Switch to List  View'}
      </button>
      <NewsList isGrid={isGrid} toggleGrid={toggleGrid} />
    </div>
  );
};

export default Home;