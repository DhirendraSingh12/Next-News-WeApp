import React from 'react';
import axios from 'axios';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        q: params.id,  // Using the route parameter as a query
        apiKey: 'a32e4c47469c441aa7a30e675339e11e',
      },
    });

    const article = response.data.articles[0];  // Assuming the first result is the desired article

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      props: {
        article: {},
      },
    };
  }
}

export default ArticleDetail;