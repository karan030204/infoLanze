import React from "react";
import "../../Elements/Options.css";
import { SiAmazonsimpleemailservice } from "react-icons/si";

const Options = ({ content }) => {
  return (
    <>
      <div className="option-wrapper">
        <div className="option-logo">
          <div className="ImgWrapper">
            <SiAmazonsimpleemailservice color="white"/>
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
