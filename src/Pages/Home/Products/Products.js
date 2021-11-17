import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container className="mt-3">
      <div className="theme-heading text-center my-4">
        <h3 className="fw-bold">Featured Products</h3>
      </div>
      <Row className="g-4">
        {products.slice(0, 6).map((product) => (
          <>
            <Col key={product?._id} xs={12} sm={6} md={4}>
              <Card className="shadow">
                <Card.Img variant="top" src={product?.image} />
                <Card.Body className="text-center">
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>
                    <div className="reviews">
                      <Rating
                        initialRating={product?.rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                      ></Rating>
                    </div>
                  </Card.Text>
                  <Card.Title className="price">${product?.price}</Card.Title>
                  <Link to={`/checkout/${product?._id}`}>
                    <button className="btn cart_btn">Purchase</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </Container >
  );
}

export default Products;
