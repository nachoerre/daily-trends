/*Crear una vista listado de Feeds que consuman las noticias*/
import React, { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import './FeedList.css'

function FeedList() {
  const [newsFetched, setNewsFetched] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch("mock/newsFetched.json"); //realizo la llamada a un mock ya que no realizo web scraping
        if (!response.ok) {
          throw new Error(`Failed tryinig to get the news: ${response.status}`);
        }
        const data = await response.json();
        setNewsFetched(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    getNews();
  }, []);

  return (
    <div className="feed-list">
      {newsFetched.map((feed) => (
        <FeedItem feed={feed} key={feed.title} />
      ))}
    </div>
  );
}

export default FeedList;
