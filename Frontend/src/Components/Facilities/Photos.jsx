import React from 'react'
import PhotoCard from './PhotoCard'
import '../../Elements/Facilities.css'


const Photos = () => {
  return (
    <>
    <div className='flex flex-wrap flex-row gap-10 justify-center m-10' >
        <PhotoCard children={'https://waptag.org/upload/facility/cmtimg-01da183d09c3755da44c87d647cbdd75.webp'} />
        <PhotoCard children={'https://waptag.org/upload/facility/cmtimg-01da183d09c3755da44c87d647cbdd75.webp'} />
        <PhotoCard children={'https://waptag.org/upload/facility/cmtimg-01da183d09c3755da44c87d647cbdd75.webp'} />
        <PhotoCard children={'https://waptag.org/upload/facility/cmtimg-01da183d09c3755da44c87d647cbdd75.webp'} />
        <PhotoCard children={'https://waptag.org/upload/facility/cmtimg-01da183d09c3755da44c87d647cbdd75.webp'} />
        <PhotoCard children={'https://waptag.org/upload/facility/cmtimg-01da183d09c3755da44c87d647cbdd75.webp'} />
    </div>
    </>
  )
}

export default Photos