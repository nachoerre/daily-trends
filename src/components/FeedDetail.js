/*Vista detalle de Feed que se pueda editar y borrar */
import React, { useRef } from "react";
import "./FeedDetail.css";

function FeedDetail({ handleCloseModal, editNew }) {
  const titleInputRef = useRef();
  const bodyInputRef = useRef();
  const imageInputRef = useRef();
  const sourceInputRef = useRef();
  const publisherInputRef = useRef();

  const sendData = (feedBody) => {
    editNew(feedBody);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(titleInputRef.current.value);
    const feedBody = {
      title: titleInputRef.current.value,
      content: bodyInputRef.current.value,
      urlToImage: imageInputRef.current.value,
      source: { name: sourceInputRef.current.value },
      author: publisherInputRef.current.value,
    };
    sendData(feedBody);
    handleCloseModal();
  };

  return (
    <div className="feed-detail-content">
      <form className="feed-detail-form" onSubmit={handleSubmit}>
        <h1 className="feed-detail-title">Edit News</h1>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" ref={titleInputRef} />
        </label>
        <br />
        <label htmlFor="body">
          Body:
          <input type="text" id="body" ref={bodyInputRef} />
        </label>
        <br />
        <label htmlFor="image">
          Image:
          <input type="img" id="image" ref={imageInputRef} />
        </label>
        <br />
        <label htmlFor="source">
          Source:
          <input type="text" id="source" ref={sourceInputRef} />
        </label>
        <br />
        <label htmlFor="publisher">
          Publisher:
          <input type="text" id="publisher" ref={publisherInputRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="submit" onClick={handleCloseModal}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default FeedDetail;
