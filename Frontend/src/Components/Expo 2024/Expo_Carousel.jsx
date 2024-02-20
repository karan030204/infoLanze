import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../Elements/Expo.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Expo_Carousel = () => {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          width: "100%",
          height: "100%",
          pauseOnHover: false,
          type: "loop",
          autoplay: true,
          interval: 2500,
          pagination: false,
          arrows: false,
          speed: 1500,
        }}
        aria-label=""
      >
        <SplideSlide>
          <div className="" style={{ width: "900px", margin: "0 auto" }}>
            <img src="expo1.jpg" alt="Image 1" style={{ width: "100%" }} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="" style={{ width: "900px", margin: "0 auto" }}>
            <img src="expo2.jpg" alt="Image 1" style={{ width: "100%" }} />
          </div>
        </SplideSlide>
      </Splide>

      <section className="expo-content-wrapper"> 
        <div className="expo-content">
          <p>
            Curabitur enim auctor! Habitasse irure dictumst cras dui nostra,
            laudantium facere nunc molestie, impedit! Soluta nemo. Habitant
            iste, repellat minima.
            Curabitur enim auctor! Habitasse irure dictumst cras dui nostra,
            laudantium facere nunc molestie, impedit! Soluta nemo. Habitant
            iste, repellat minima.
            Curabitur enim auctor! Habitasse irure dictumst cras dui nostra,
            laudantium facere nunc molestie, impedit! Soluta nemo. Habitant
            iste, repellat minima.
          </p>
        </div>
        <div className="expo-dates">
            <div>Dates : 24th February 2024</div>
            <div>Event : Water Business </div>
        </div>
      </section>

      <hr style={{padding:"30px",margin : "15px 30px"}}/>
    </>
  );
};

export default Expo_Carousel;
