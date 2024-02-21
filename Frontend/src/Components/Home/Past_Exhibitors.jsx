import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../Elements/Carousel.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { waptab_img, carousel_img1 } from "../../images/data";

const Past_Exhibitors = () => {
  return (
    <>
      <div className="exhibitors-title  text-center mt-10 ">
        <span className="title-underline">Our Past</span> Exhibitors
      </div>
      <Splide
        options={{
          rewind: true,
          width: "100%",
          height: "100%",
          pauseOnHover: false,
          type: "loop",
          drag: "free",
          autoplay: true, // Set autoplay to true
          // Optionally, set the interval between slides in milliseconds (default is 5000)
          pagination: false,
          arrows: false,
          gap: "10px",
          perPage: 3,
          focus: "center",
          autoScroll: {
            speed: 10,
          },
        }}
        aria-label="My Favorite Images"
        className="mx-auto"
      >
        <SplideSlide>
          <img src={waptab_img} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={carousel_img1} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={waptab_img} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={carousel_img1} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={waptab_img} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={carousel_img1} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={waptab_img} alt="Image 1" />
        </SplideSlide>{" "}
        <SplideSlide>
          <img src={carousel_img1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={waptab_img} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={carousel_img1} alt="Image 3" />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Past_Exhibitors;
