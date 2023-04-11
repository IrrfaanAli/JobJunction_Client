import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <nav className=' lg:flex lg:justify-between items-center lg:p-9 '>
          <h2 className='font-bold ml-7 text-xl lg:text-2xl items-center'>Job Junction</h2>
         <ul className=' flex lg:flex items-center'>
         <Link to={`/`}> <li className='m-3 lg:m-5 lg:text-xl'>Home</li></Link>
         <Link to={`/statistics`}> <li className=' m-3 lg:m-5 lg:text-xl'>Statastics</li></Link>
       <Link to={`/appliedjobs`}> <li className='m-3 lg:m-5 lg:text-xl'>Applied Jobs</li></Link>
      <Link to={`/blog`}><li className=' m-3 lg:m-5 lg:text-xl'>Blog</li></Link> 
        </ul>
        <button id='header-button'  className=' ml-12 lg:text-xl font-semibold'>Hire Me</button>
      </nav>
      
        </div>
    );
};

export default Header;