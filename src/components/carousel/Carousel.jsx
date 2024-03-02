import "./carousel.css";
import { useState } from "react";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const handleNextClick = (idx) => {
    // const nextImgIndex = idx === images.length - 1 ? 0 : idx++;
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevClick = (idx) => {
    // const prevImg = idx === 0 ? images.length - 1 : idx++;
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  console.log(current);
  return (
    <>
      <h2 className="carousel-heading">React Carousel Application</h2>
      <div className="carousel-container">
        <FontAwesomeIcon
          className="left-btn"
          icon={faArrowCircleLeft}
          onClick={() => handlePrevClick(current)}
        />
        {/* <img className="carousel-img" src={images[0]} alt="image" /> */}
        {images.map(
          (img, idx) =>
            current === idx && (
              <div key={img} className="carousel-img-container">
                <img className="carousel-img" src={img} alt="image" />
              </div>
            )
        )}
        <FontAwesomeIcon
          className="right-btn"
          icon={faArrowCircleRight}
          onClick={() => handleNextClick(current)}
        />
      </div>
    </>
  );
};

export default Carousel;
