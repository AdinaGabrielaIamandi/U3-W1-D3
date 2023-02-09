import { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: ""
    }
  };
  /*   handelChange = (propName, propValue) => {
    this.setState({
      ...this.state.comments,
      [propName]: propValue
    });
  }; */

  render() {
    return <p>Sezione Commenti</p>;
  }
}

export default CommentArea;
