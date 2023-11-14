import React from 'react';

const NewsDetail = ({ article }) => {
  return (
    <div suppressHydrationWarning={true}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt={article.title} />
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  );
};

export default NewsDetail;