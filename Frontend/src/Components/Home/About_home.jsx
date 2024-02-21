import React from "react";
import '../../Elements/About_home.css'

const About_home = () => {
  return (
    <>
      <section class="about-home text-gray-400  body-font">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-14">
            <h1 class="home-about-me sm:text-3xl text-2xl   mb-8 ">
              <span className="title-underline">About</span> Me
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
              <b>WAPTAG</b> has become the name synonymous to MOST trusted and
              successful association of Water Purification and Treatment
              Industry. WAPTAG is one of the most unique and comprehensive water
              industry platforms in India, engaging with latest technologies in
              the water and waste-water management services.
            </p>
          </div>
          <div class=" flex items-center justify-center w-full mx-auto px-5 sm:px-0  sm:space-x-4 sm:space-y-0 space-y-4">
            <button class="border-0 py-2 px-5 focus:outline-none  rounded ">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_home;
