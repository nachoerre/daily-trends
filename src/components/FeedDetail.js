import React, { useState, useRef } from 'react';

function FeedDetail() {
  const [feed, setFeed] = useState({});

  const titleInputRef = useRef();
  const bodyInputRef = useRef();
  const imageInputRef = useRef();
  const sourceInputRef = useRef();
  const publisherInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeed({
      title: titleInputRef,
      content: bodyInputRef,
      urlToImage: imageInputRef,
      source: {name:sourceInputRef},
      author: publisherInputRef
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
      <h1>Edit News</h1>
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
    </form>
    </div>
  )

};

export default FeedDetail;