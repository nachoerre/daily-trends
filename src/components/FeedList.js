/*Crear una vista listado de Feeds que consuman las noticias*/
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import FeedItem from "./FeedItem";
import FeedDetail from "./FeedDetail";
import "./FeedList.css";

function FeedList() {
  const [newsFetched, setNewsFetched] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const createNews = (newFeed) => {
    newsFetched.push(newFeed);
  };

  return (
    <div className="feed-list">
      <div style={{ position: "sticky", top: "-1px", padding: "10px" ,margin: "15px", background: "black", width: "100%" }}>
        <Button onClick={() => setModalIsOpen(true)}>Create</Button>
      </div>
      {newsFetched.map((feed) => (
        <FeedItem feed={feed} key={feed.title} />
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
