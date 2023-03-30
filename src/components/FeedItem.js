/*Modelo Feed que tenga los atributos: title, body, image, source y publisher */
import React from 'react';
import './FeedItem.css'

const FeedItem = (props) => {
  const { title, content, urlToImage, source, author } = props.feed
  return (
    <div className='feed-item'>
      <h2>Title: {title}</h2>
      <p className='body'>{content}</p>
      <img src={urlToImage} alt={title} />
      <p className='source'>{source.name}</p>
      <p className='publisher'>{author?? "Anonymous"}</p>
    </div>
  );
};

export default FeedItem;
