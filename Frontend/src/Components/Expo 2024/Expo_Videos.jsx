import React, { useState } from "react";
import "../../Elements/Expo.css";
import ReactPlayer from "react-player";

const Expo_Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(1);


  const handleSelectedVd = (e) => {
    setSelectedVideo(e.target.id);
  }  
  const videos_data = [
    {
      id: 1,
      url: "",
    },
    {
      id: 2,
      url: "",
    },
    {
      id: 3,
      url: "",
    },
    {
      id: 4,
      url: "",
    },
    {
      id: 5,
      url: "",
    },
    {
      id: 6,
      url: "",
    },
    {
      id: 7,
      url: "",
    },
  ];
  return (
    <>
      <div className="expo-video-wrapper">
        <div className="video-toggle">
          <div className={selectedVideo == 1 ? "active vdOptn" : "vdOptn"} id="1" onClick = {(e)=>{handleSelectedVd(e)}}>
            WAPTAG 2022 Sponsors Testimonial
          </div>
          <div className={selectedVideo == 2 ? "active vdOptn" : "vdOptn"} id="2" onClick = {(e)=>{handleSelectedVd(e)}}>
            WAPTAG 2022 Sponsors Testimonial
          </div>
          <div className={selectedVideo == 3 ? "active vdOptn" : "vdOptn"} id="3" onClick = {(e)=>{handleSelectedVd(e)}}>
            WAPTAG 2022 Sponsors Testimonial
          </div>
          <div className={selectedVideo == 4 ? "active vdOptn" : "vdOptn"} id="4" onClick = {(e)=>{handleSelectedVd(e)}}>
            WAPTAG 2022 Sponsors Testimonial
          </div>
        </div>

        <div className="videos">
          <div className="videos-list">
            {videos_data.map((item) => {
              return (
                <div key={item.id} className="vd">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/vzk9qK8tqXE?si=zMYPBvWNwxl-QXPk"
                    width="100%"
                    height="100%"
                    controls
                    loop
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expo_Videos;
