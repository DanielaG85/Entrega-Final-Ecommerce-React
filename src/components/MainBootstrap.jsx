import { Container, Row, Col } from "react-bootstrap";

function MainBootstrap() {
  return (
    <Container className="my-4">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8} lg={6} className="">
          <h2>Bienvenido a Beauty Shop</h2>
          <p>
            Todo el makeup que buscas en un solo lugar
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;