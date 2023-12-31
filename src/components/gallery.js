import React from 'react'

function Gallery() {
    const projects=[
        {name:"",img:"",link:""}
    ]
  return (
    <div className='col-lg-8 gallery-container mt-5'>

<div className='gallery'>
<div className='project'>
        <div className='img'></div>
        <p>Project Name</p>
      </div>

      <div className='project'>
        <div className='img'></div>
        <p>Project Name</p>
      </div>

      <div className='project'>
        <div className='img'></div>
        <p>Project Name</p>
      </div>

      <div className='project'>
        <div className='img'></div>
        <p>Project Name</p>
      </div>
      <div className='project'>
        <div className='img'></div>
        <p>Project Name</p>
      </div>
      <div className='project'>
        <div className='img'></div>
        <p>Project Name</p>
      </div>
</div>


{/* <div className='arrows d-flex justify-content-between mt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 12" width="100" height="50" fill="none" stroke="white" strokeWidth="0.5">
  <line x1="2" y1="6" x2="28" y2="6" />
  <polyline points="3.5 4 2 6 3.5 8" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 12" width="100" height="50" fill="none" stroke="white" strokeWidth="0.5">
  <line x1="2" y1="6" x2="28" y2="6" />
  <polyline points="26.5 4 28 6 26.5 8" />
</svg>
</div> */}



    </div>
  )
}

export default Gallery
