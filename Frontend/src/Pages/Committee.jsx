import React, { useState } from 'react'
import Com_Img from '../Components/Committee/Com_Img'
import '../Elements/Committee.css'

const Committee = () => {
  const [selected,setSelected] = useState(1);

  const handleSelect = (e) => {
    console.log(e.target.id);
    setSelected(e.target.id);
  }

  const data = [
    {
      Name : "Karan Dattani",
      Company : "Max Pure Water System Private Limited",
      img : "https://waptag.org/upload/comitee/cmtimg-ba68945d4859242ec7c56957de173756.webp"
    },
    {
      Name : "Karan Dattani",
      Company : "Max Pure Water System Private Limited",
      img : "https://waptag.org/upload/comitee/cmtimg-ba68945d4859242ec7c56957de173756.webp"
    },
    {
      Name : "Karan Dattani",
      Company : "Max Pure Water System Private Limited",
      img : "https://waptag.org/upload/comitee/cmtimg-ba68945d4859242ec7c56957de173756.webp"
    },
    {
      Name : "Karan Dattani",
      Company : "Max Pure Water System Private Limited",
      img : "https://waptag.org/upload/comitee/cmtimg-ba68945d4859242ec7c56957de173756.webp"
    },
    {
      Name : "Karan Dattani",
      Company : "Max Pure Water System Private Limited",
      img : "https://waptag.org/upload/comitee/cmtimg-ba68945d4859242ec7c56957de173756.webp"
    }
  ]
  return (
    <>
    <div className='toggle-committee'>
      <div className={selected == 1 ? "active optn" : "optn"} id='1'  onClick={(e)=>handleSelect(e)}>Steering Committee</div>
      <div className={selected == 2 ? "active optn" : "optn"} id='2' onClick={(e)=>handleSelect(e)}>Steering Committee</div>
      <div className={selected == 3 ? "active optn" : "optn"} id='3' onClick={(e)=>handleSelect(e)}>Steering Committee</div>
      <div className={selected == 4 ? "active optn" : "optn"} id='4' onClick={(e)=>handleSelect(e)}>Steering Committee</div>
      <div className={selected == 5 ? "active optn" : "optn"} id='5' onClick={(e)=>handleSelect(e)}>Steering Committee</div>
      <div className={selected == 6 ? "active optn" : "optn"} id='6' onClick={(e)=>handleSelect(e)}>Steering Committee</div>
      <div className={selected == 7 ? "active optn" : "optn"} id='7' onClick={(e)=>handleSelect(e)}>Steering Committee</div>
     

    </div>
    <div className="committee"> 
      {data.map((item,index)=>{
        return (
        <div key={index} >
          <Com_Img item={item}/>
        </div>
        )
      })}
      </div>
    </>
  )
}

export default Committee