import { Col, Card, Button } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col sm={12} md={4} lg={2}>
      <Card className="text-bg-secondary m-2">
        <Card.Img
          variant="top"
          src={props.img}
          style={{
            objectFit: "cover",
            width: "100%",
            aspectRatio: "1/1.5"
          }}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{props.title}</Card.Title>
          <Button variant="dark">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
