import { Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="footer text-bg-dark">
      <Row>
        <Col className="col-12">
          <p className="m-auto py-3">Copyright &copy; 2023</p>
        </Col>
      </Row>
    </footer>
  );
};

export default MyFooter;
