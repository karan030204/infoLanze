import React from "react";
import "../../Elements/Facilities.css";

const PhotoCard = ({ children }) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="fac-ImgWrapper">
          <img src={children} alt="" />
        </div>
       
      </div>
    </>
  );
};

export default PhotoCard;
