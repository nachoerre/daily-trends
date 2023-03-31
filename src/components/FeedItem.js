/*Modelo Feed que tenga los atributos: title, body, image, source y publisher */
import React, { useState } from 'react';
import Modal from 'react-modal';
import FeedDetail from './FeedDetail';
import './FeedItem.css'

const FeedItem = (props) => {

  
  const [feed, setFeed] = useState(props.feed);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = (feed) => {
    setModalIsOpen(true);
  };

  const editNew = (feedBody) => {
    setFeed(feedBody)
    console.log(feedBody)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='feed-item'>
      <h2>Title: {feed.title}</h2>
      <p className='body'>{feed.content}</p>
      <img src={feed.urlToImage} alt={feed.title} />
      <p className='source'>{feed.source.name}</p>
      <p className='publisher'>{feed.author?? "Anonymous"}</p>
      <button onClick={() => handleOpenModal()}>
        Edit
      </button>
      <Modal className='feed-detail-modal' isOpen={modalIsOpen} >
        <FeedDetail editNew={(feedBody) => editNew(feedBody)} handleCloseModal={handleCloseModal}/>
      </Modal>
    </div>
  );
};

export default FeedItem;
