/*Vista detalle de Feed que se pueda editar y borrar */
import React, { useReducer } from "react";
import "./FeedDetail.css";
import { Button } from "react-bootstrap";

function FeedDetail({ type, feed, handleCloseModal, editNews }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, title: action.value };
      case "content":
        return { ...state, content: action.value };
      case "urlToImage":
        return { ...state, urlToImage: action.value };
      case "source":
        return { ...state, source: action.value };
      case "author":
        return { ...state, author: action.value };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, feed);

  const handleSubmit = (event) => {
    event.preventDefault();
    editNews(state);
    handleCloseModal();
  };

  const handleOnChange = (event) => {
    dispatch({ type: event.target.name, value: event.target.value });
  };

  return (
    <div className="feed-detail-content">
      <form className="feed-detail-form" onSubmit={handleSubmit}>
        <h1 className="feed-detail-title">{type} News</h1>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={state?.title ?? ""}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <label htmlFor="body">
          Body:
          <input
            type="text"
            id="content"
            name="content"
            value={state?.content ?? ""}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <label htmlFor="image">
          Image:
          <input
            type="text"
            id="urlToImage"
            name="urlToImage"
            value={state?.urlToImage ?? ""}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <label htmlFor="source">
          Source:
          <input
            type="text"
            id="source"
            name="source"
            value={state?.source ?? ""}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <label htmlFor="publisher">
          Publisher:
          <input
            type="text"
            id="author"
            name="author"
            value={state?.author ?? ""}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <div className="form-button-container">
          <Button type="submit">Submit</Button>
          <Button type="submit" onClick={handleCloseModal}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FeedDetail;
