import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import "../../Elements/Carousel.css";
import { carousel_img1, waptab_img } from "../../images/data";

const Hero_Carousel = () => {
  return (
    <div className="hero-carousel">
    <Splide
      options={{
        rewind: true,
        width: "100%",
        height: "100%",
        pauseOnHover: false,
        type: "loop",
        autoplay: true, // Set autoplay to true
        interval: 2500, // Optionally, set the interval between slides in milliseconds (default is 5000)
        pagination: false,
        arrows: false,
        speed: 1200,
      }}
      aria-label="My Favorite Images"
      className="mx-auto "
    >
      <SplideSlide>
        <img
          src={carousel_img1}
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={carousel_img1}
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={waptab_img}
          alt="Image 3"
        />
      </SplideSlide>
    </Splide>
    </div>
  );
};

export default Hero_Carousel;
