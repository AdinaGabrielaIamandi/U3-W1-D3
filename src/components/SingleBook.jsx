import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
        className="m-2"
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          style={{ objectFit: "cover", width: "100%", aspectRatio: "1/1.5" }}
        />
        <Card.Body>
          <Card.Title className="text-truncate" style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
          {this.state.selected && <CommentArea />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
