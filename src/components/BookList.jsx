import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Row>
      {props.book.map((b) => (
        <SingleBook {...b} />
      ))}
    </Row>
  );
};

export default BookList;
