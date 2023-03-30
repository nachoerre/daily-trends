/*Modelo Feed que tenga los atributos: title, body, image, source y publisher */
import React from 'react';

const FeedItem = ({ title, body, image, source, publisher }) => {
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
      <img src={image} alt={title} />
      <p>Source: {source}</p>
      <p>Publisher: {publisher}</p>
    </div>
  );
};

export default FeedItem;
