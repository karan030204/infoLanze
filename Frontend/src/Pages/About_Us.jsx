import React from "react";
import "../Elements/About.css";

const About_Us = () => {
  return (
    <>
      <section class="about text-slate-800 bg-white body-font">
        <div class="px-5 py-8 mx-auto">
          <div class="text-center mb-20">
            <h1 class="about-title sm:text-3xl text-2xl    mb-7">
              <span className="title-underline">About</span> Us
            </h1>
            <p class="text-base leading-relaxed  xl:w-3/4 lg:w-3/4  mx-auto text-gray-800 text-opacity-80">
              <b>WAPTAG</b> has become the name synonymous to MOST trusted and
              successful association of Water Purification and Treatment
              Industry. WAPTAG is one of the most unique and comprehensive water
              industry platforms in India, engaging with latest technologies in
              the water and waste-water management services.
            </p>

            <br />
            <p class="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-800 text-opacity-80">
              <b>WAPTAG</b> is a conglomeration of professionals and experts
              from the water industry dealing in different sectors —
              manufacturers, traders, importers, and service providers engaged
              in activities related to water purification and treatment;
              residential, commercial as well as industrial water filtration
              plant; wastewater treatment plants; domestic and industrial RO
              plants, etc. It brings together the whole industry under the same
              roof and provides a unique opportunity to share business
              opportunities, network and explore innovative water solutions.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-2 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="mission flex-grow">
                <h2 class="text-black text-lg title-font font-medium mb-3">
                  Mission
                </h2>
                <p class="leading-relaxed text-base text-slate-700">
                  The mission of WAPTAG is to unite the vibrant world of water.
                  It aims to provide a platform for for the the water industry
                  to converge and work together in achieving solutions to
                  issuesrelated to the water sector.
                </p>
                
              </div>
            </div>
            <div class="p-4 md:w-1/3  flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="vision flex-grow">
                <h2 class="text-black text-lg title-font font-medium mb-3">
                  Vision
                </h2>

                <p class="leading-relaxed text-base ">
                  <ul >
                    <li>
                      Business Community - Our goal is to develop a strong
                      business community for the growing industry of water.
                    </li>
                    <li>
                      Easy Access - Business owners can have easy access for
                      cooperations and communication.
                    </li>
                    
                  </ul>
                </p>
                
              </div>
            </div>
            <div class="p-4 md:w-1/3   flex flex-col text-center items-center " >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="values">
                <h2 class="text-black text-lg title-font font-medium mb-3">
                  Values
                </h2>
                <p class="leading-relaxed text-base text-slate-700">
                  <b>WAPTAG</b> is a joint effort of the business community from
                  Gujarat — Manufacturers, traders, importers and service
                  providers engaged in activity related to water purification.
                </p>
                
              </div>
            </div>
          </div>
            
          
        </div>
      </section>
    </>
  );
};

export default About_Us;
