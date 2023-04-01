/*Modelo Feed que tenga los atributos: title, body, image, source y publisher */
import React, { useState } from 'react';
import Modal from 'react-modal';
import FeedDetail from './FeedDetail';
import './FeedItem.css';
import { Button } from 'react-bootstrap';

const FeedItem = (props) => {
  const [feed, setFeed] = useState(props.feed);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const editNews = (feedBody) => {
    setFeed(feedBody);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="feed-item">
      <h2>{feed.title}</h2>
      <p className="body">{feed.content}</p>
      <img src={feed.urlToImage} alt={feed.title} />
      <p className="source">{feed.source}</p>
      <p className="publisher">{feed.author ?? 'Anonymous'}</p>
      <Button onClick={() => handleOpenModal()}>Edit</Button>
      <Modal className="feed-detail-modal" isOpen={modalIsOpen}>
        <FeedDetail
          type="Edit"
          feed={feed}
          editNews={(feedBody) => editNews(feedBody)}
          handleCloseModal={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default FeedItem;
