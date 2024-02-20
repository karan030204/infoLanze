import React from "react";
import '../../Elements/About_home.css'

const About_home = () => {
  return (
    <>
      <section class="about-home text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              About Me
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              <b>WAPTAG</b> has become the name synonymous to MOST trusted and
              successful association of Water Purification and Treatment
              Industry. WAPTAG is one of the most unique and comprehensive water
              industry platforms in India, engaging with latest technologies in
              the water and waste-water management services.
            </p>
          </div>
          <div class=" flex items-center justify-center w-full mx-auto px-8 sm:px-0  sm:space-x-4 sm:space-y-0 space-y-4">
            <button class="text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-slate-100 rounded text-lg">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_home;
