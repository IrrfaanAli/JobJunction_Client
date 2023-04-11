import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <nav className='flex justify-between items-center p-9 '>
          <h2 className='font-bold text-2xl items-center'>Job Junction</h2>
         <ul className='flex items-center'>
         <Link to={`/`}> <li className='m-5 text-xl'>Home</li></Link>
         <Link to={`/statistics`}> <li className='m-5 text-xl'>Statastics</li></Link>
       <Link to={`/appliedjobs`}> <li className='m-5 text-xl'>Applied Jobs</li></Link>
      <Link to={`/blog`}><li className='m-5 text-xl'>Blog</li></Link> 
        </ul>
        <button id='header-button'  className='text-xl  font-semibold'>Hire Me</button>
      </nav>
      
        </div>
    );
};

export default Header;