import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <img
          className="d-block w-100 banner__img"
          src="https://i.ibb.co/FxvmS81/banner1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-shadow">
            ULTIMATE
            <br /> CYCLING
            <br /> EXPERIENCE
          </h1>
          <p className="text-shadow text-white text-2xl">
            Explore The World's Ultomate Beauty By Riding Cycle.
          </p>
          <Link to="/shop">
            <Button className="primary__button mt-3" variant="primary">
              Explore
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner__img"
          src="https://i.ibb.co/h8QtHwr/banner5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="text-shadow">
            ULTIMATE
            <br /> CYCLING
            <br /> EXPERIENCE
          </h1>
          <p className="text-shadow">
            Explore The World's Ultomate Beauty By Riding Cycle.
          </p>
          <Link to="/shop">
            <Button className="primary__button mt-3" variant="primary">
              Explore
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
