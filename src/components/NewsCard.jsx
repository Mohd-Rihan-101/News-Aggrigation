// import React from "react";
import "./../styles/style.css";

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.urlToImage || "https://via.placeholder.com/150"} alt={article.title} />
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
