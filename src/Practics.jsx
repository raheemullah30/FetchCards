import { useState, useEffect } from "react";
import React from 'react';

function Practics() {
  const [like, SetLike] = useState(0);
  const handleLike = () =>{

    SetLike(like + 1);
  }
  const [NewsData, SetNewsData] = useState([]);

  const GetNews = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c11df38dfbf44dc6ac5356c9fe99eef3");
    const result = await response.json();
    SetNewsData(result.articles);
  };

  useEffect(() => {
    GetNews();
  }, []);

  return (
    <div className="card-container">
      {/* Iterate through the fetched articles */}
      {NewsData.map((article, index) => (
        <div key={index} className="border">
          {article.urlToImage && (
            <img src={article.urlToImage} alt="News" />
          )}
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <button className="btn2" onClick={handleLike}> Like{like}</button>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn">Read more</a>
        </div>
      ))}
    </div>
  );
}

export default Practics;
