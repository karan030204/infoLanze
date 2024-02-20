import React from 'react'
import Option from './Option'
import '../../Elements/Carousel.css'

const Home_Options = () => {
  return (
    <>

    <div className='options'>
        <Option content={"Waptag Expo"} img={'options.png'}/>
        <Option content={"IAMP"} img={'options.png'}/>
        <Option content={"Activities"} img={'options.png'}/>
        <Option content={"Facilities"} img={'options.png'}/>
       
</div>
    </>
  )
}

export default Home_Options