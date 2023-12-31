import React from 'react'; 
import './App.css';
import arrow from './assets/arrow-long-left-svgrepo-com (1).svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from './components/Nav';
import Gallery from './components/gallery';

function App() {

  const galleryScrollRight=()=>{
    const galleryElement = document.querySelector('.gallery-container');
    const circles = document.querySelector('.circles');

    const currentActiveElement = circles.querySelector('#activ');

  const nextActiveElement = currentActiveElement.nextElementSibling;

  
  if(nextActiveElement){
    currentActiveElement.removeAttribute('id');
    nextActiveElement.setAttribute('id', 'activ')
  }

    const scrollAmount = 290;
    galleryElement.scrollTo({
      left: galleryElement.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });


  }
  const galleryScrollLeft=()=>{
    const galleryElement = document.querySelector('.gallery-container');
    const circles = document.querySelector('.circles');

    const currentActiveElement = circles.querySelector('#activ');

  const prevActiveElement = currentActiveElement.previousElementSibling;

  
  if(prevActiveElement){
    currentActiveElement.removeAttribute('id');
    prevActiveElement.setAttribute('id', 'activ')
  }
    const scrollAmount = -290;
    galleryElement.scrollTo({
      left: galleryElement.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  }

  return (
    <div className='app '>
      <div className='intro '>
      <Nav/>
<div className='home-content d-flex '>

 <div className='info-box col-lg-3 flex-column align-self-center'>
     <h1 className='h1'><span>Explore the </span><span>Unexplored.</span></h1>

        {/* <p className='intro-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt bore et dolore magna aliqua Praesent elementum facilisis leo vel fringilla est ullamcorper eget Lectus arcu bibendum at varius vel pharetra vel turpis Faucibus in ornare quam viverra orci sagittis eu. Tellus id interdum velit laoreet id.</p> */}

    <div className='learn-more'>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12" width="50" height="25" fill="none" stroke="white" stroke-width="0.5">
  <line x1="2" y1="6" x2="20" y2="6" />
  <polyline points="18.5 4 20 6 18.5 8" />
     </svg> */}
     <span>learn more </span>
</div>
</div>

<Gallery/>

</div>
<div className='down-box d-flex justify-content-between mt-3  align-items-center'>
<div className='social-icons  '>
<i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-instagram"></i>
<i className="fa-brands fa-twitter"></i>
</div>

<div className='arrows-box'>
<i class="bi bi-chevron-left" onClick={()=>galleryScrollLeft()}></i>
<i class="bi bi-chevron-right" onClick={()=>galleryScrollRight()}></i>
</div>

</div>
    </div>
    </div>
  )
}

export default App
