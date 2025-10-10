import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";
import NavbarHeader from "./NavbarHeader/NavbarHeader";

const products = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function ProductList() {
  return (
    <>
      <NavbarHeader />
      <Container className="my-5">
        <h2 className="text-center mb-5 fw-bold">MUSIC</h2>
        <Row className="gx-0 gy-5 justify-content-center">
          {products.map((product) => (
            <Col
              key={product.id}
              xs={10}
              sm={6}
              md={6}
              lg={6}
              className="px-0"
            >
              <Card
                className="border-0 text-center h-100 product-card"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <Card.Body className="p-0">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      alt={product.title}
                      style={{ height: "250px", objectFit: "contain" }}
                    />
                  </div>
                  <Card.Title className="fw-semibold mt-3">{product.title}</Card.Title>
                  <Card.Text className="fs-5 mb-3">${product.price}</Card.Text>
                  <Button variant="dark" className="rounded-pill w-50">
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProductList;
