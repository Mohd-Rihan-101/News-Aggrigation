import  { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./../styles/style.css";

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "f0639fd00dca4037b56c344b7e0f13a0"; 
  const BASE_URL = "https://newsapi.org/v2";

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
          params: {
            category,
            country: "us",
            apiKey: API_KEY, 
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };
    fetchNews();
  }, [category]);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
