import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://stark-sands-52962.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="body_wrapper py-4 shadow-lg">
      <Container className="my-2">
        <div className="text-center mb-4">
          <h2 className="fw-bold theme-heading">All Products</h2>
        </div>
        <Row className="g-4">
          {products.map((product) => (
            <>
              <Col key={product.id} xs={12} sm={6} md={4}>
                <Card className="shadow-lg">
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
                    <Card.Title>${product?.price}</Card.Title>
                    <Link to={`/checkout/${product?._id}`}>
                      <button className="btn cart_btn">Purchase</button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
