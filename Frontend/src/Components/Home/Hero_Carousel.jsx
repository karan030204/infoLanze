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

const Hero_Carousel = () => {
  return (
    <Splide
      options={{
        rewind: true,
        width: "100%",
        height: "30%",
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
          src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg"
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg"
          alt="Image 3"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Hero_Carousel;
