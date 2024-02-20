import React from "react";
import '../../Elements/Options.css'

const Options = ({ content,img }) => {
  return (
    <>
      <div className="option-wrapper">
        <div className="option-logo">
          <div className="ImgWrapper">
            <img
             src={img}
              alt=""
            />
          </div>
        </div>
        <div className="option-content">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Options;
