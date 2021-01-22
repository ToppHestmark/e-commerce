import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.png";
import "./banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="banner" fluid style={{ marginTop: "60px" }}>
      <Carousel
        indicators={false}
        controls={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 banner__image"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner__image"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner__image"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
