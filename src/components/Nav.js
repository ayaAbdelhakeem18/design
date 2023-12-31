import React from 'react';
import logo from '../assets/logo.png';

function Nav() {
    let navlinks=['Home','products','our products','store'];

  return (
    <div className='container-fluid'>
    <nav className='d-flex align-items-center'>

      <div className='d-flex flex-no-wrap  align-items-center '>
        {/* <div className='logo '><img src={logo} className='img-fluid' ></img></div> */}
        <ul className='nav-links d-flex align-items-center m-0'>
          {navlinks.map((e,i)=><li key={i} className='nav-item'>{e}</li>)}
        </ul>
      </div>

        <div className='circles d-flex align-items-center'>
        <i className="fa-solid fa-circle" id='activ'></i> 
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        </div>

      <div className='d-flex flex-no-wrap align-items-center'>
      <p className='nav-item  ml-5'>signup</p>
      <p className='nav-item ml-5'>login</p>
      <i className="fa-solid fa-caret-down ml-5"></i>
      </div>

    </nav>
    </div>
  )
}

export default Nav;
