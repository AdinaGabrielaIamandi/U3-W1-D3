import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  render() {
    return (
      <>
        <CommentsList />
        <AddComment />
      </>
    );
  }
}

export default CommentArea;
