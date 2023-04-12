import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
     <nav className=' lg:flex lg:justify-between items-center lg:p-9 bg-gray-200 mt-5 '>
          <h2 className='font-bold ml-7 text-xl text-orange-500 lg:text-4xl items-center'>Job Junction</h2>
         <ul className=' flex lg:flex items-center'>
         <Link to={`/`}> <li className='m-3 lg:m-5 lg:text-2xl font-semibold'>Home</li></Link>
         <Link to={`/statistics`}> <li className=' m-3 lg:m-5 lg:text-2xl font-semibold'>Statastics</li></Link>
       <Link to={`/appliedjobs`}> <li className='m-3 lg:m-5 lg:text-2xl font-semibold'>Applied Jobs</li></Link>
      <Link to={`/blog`}><li className=' m-3 lg:m-5 lg:text-2xl font-semibold'>Blog</li></Link> 
        </ul>
        <button id='header-button'  className=' ml-5 lg:text-xl font-semibold mb-3'>Start Applying</button>
      </nav>
      
       
    );
};

export default Header;