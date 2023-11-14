import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsDetail from './NewsDetail';
import GridViewToggle from './GridViewToggle';
import styles from '@/styles/NewList.module.css'

const NewsList = ({ isGrid, toggleGrid }) => {
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div>
      {selectedArticle ? (
        <NewsDetail article={selectedArticle} />
      ) : (
        <div>
          <h2>News Headlines</h2>
          
            {news.map((article) => (
              <div
                key={article.title}
                className={isGrid ? styles['grid-item'] : styles['list-item']}
                onClick={() => handleArticleClick(article)}
              >
                {article.title}
              </div>
            ))}
          
        </div>
      )}
    </div>
  );
};

export default NewsList;