import React from "react";
import '../../Elements/Com_Img.css'

const Com_Img = ({ item }) => {
  return (
    <>
      <section class="committee-img ">
        <div className="ImgWrapper">
            <img src={item.img} alt="" />
        </div>
        <div className="ImgContent">
          <div className="Name">{item.Name}</div>
          <div className="CompanyName">{item.Company}</div>
        </div>
      </section>
    </>
  );
};

export default Com_Img;
