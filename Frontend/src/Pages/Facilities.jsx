import React from "react";
import { useState } from "react";
import "..//Elements/Facilities.css";
import Photos from "../Components/Facilities/Photos";

const Facilities = () => {

  const [selectedFac, setSelectedFac] = useState(1);

  const handleFacOption = (e) => {

    setSelectedFac(e.target.id);


  }
  return (
    <>
    <div className="facilities-section">
      <section class=" text-gray-600 body-font">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4 text-center ">
          Facilities
        </h1>
        <div class="container px-5 py-16 mx-auto flex flex-wrap justify-around ">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                Facilities
              </h1>
              <div class="leading-relaxed">
                Totam maiores dictumst sequi. Ratione platea duis porta nostrud
                libero, velit, natoque tortor ultricies. Qui suspendisse nostra
                wisi, accumsan eaque.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900"></h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                {/* 1.8K */}
              </h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
          <div class="lg:w-2/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://img.freepik.com/free-photo/nature-journey-travel-trekking-summertime-concept-vertical-shot-pathway-park-leading-forested-area-outdoor-view-wooden-boardwalk-along-tall-pine-trees-morning-forest_343059-3064.jpg"
              alt="stats"
            />
          </div>
        </div>
        <div class="container px-5 py-16 mx-auto flex flex-wrap flex-row-reverse justify-around">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                Facilities
              </h1>
              <div class="leading-relaxed">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                {/* 2.7K */}
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                {/* 1.8K */}
              </h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
          <div class="lg:w-2/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://img.freepik.com/free-photo/nature-journey-travel-trekking-summertime-concept-vertical-shot-pathway-park-leading-forested-area-outdoor-view-wooden-boardwalk-along-tall-pine-trees-morning-forest_343059-3064.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>

      <section className="toggle-facPhotos">
          <div className={selectedFac == 1 ? "active facOptn" : "facOptn"} id="1" onClick={(e)=>handleFacOption(e)}>
          OFFICE – CONFERENCE ROOM , TRAINING ROOM , MEETING ROOM
          </div>
          <div id="2" className={selectedFac == 2 ? "active facOptn" : "facOptn"} onClick={(e)=>handleFacOption(e)}>
            Laboratory - Facilities
          </div>
      </section>

      <section className="fac-photos-wrapper relative">
        <Photos />
      </section>
      </div>
    </>
  );
};

export default Facilities;
