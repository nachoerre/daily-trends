/*Crear una vista listado de Feeds que consuman las noticias*/
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import FeedItem from "./FeedItem";
import FeedDetail from "./FeedDetail";
import "./FeedList.css";

function FeedList() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const createNews = (newFeed) => {
    const updatedFeed = [...newsFeed];
    updatedFeed.push(newFeed);
    setNewsFeed(updatedFeed);
  };

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch("mock/newsFetched.json"); //realizo la llamada a un mock ya que no realizo web scraping
        if (!response.ok) {
          throw new Error(`Failed tryinig to get the news: ${response.status}`);
        }
        const data = await response.json();
        setNewsFeed(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    getNews();
  }, []);

  return (
    <div className="feed-list">
      <div
        style={{
          position: "sticky",
          top: "0px",
          padding: "10px",
          background: "black",
          opacity: "0.85",
          width: "100%",
        }}
      >
        <Button onClick={() => setModalIsOpen(true)}>Create</Button>
      </div>
      {newsFeed.map((feed, index) => (
        <FeedItem
          feed={feed}
          key={feed.title}
        />
      ))}
      <Modal className="feed-detail-modal" isOpen={modalIsOpen}>
        <FeedDetail
          type="Create"
          feed={null}
          editNews={(feedBody) => createNews(feedBody)}
          handleCloseModal={() => setModalIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default FeedList;
