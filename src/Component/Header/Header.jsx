import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <nav className='flex justify-between items-center p-9 '>
          <h2 className='font-bold text-2xl items-center'>Job Junction</h2>
         <ul className='flex items-center'>
       <li className='m-5 text-xl'>Statastics</li>
       <li className='m-5 text-xl'>Applied Jobs</li>
      <Link to={`blogs`}><li className='m-5 text-xl'>Blog</li></Link> 
        </ul>
        <button id='header-button'  className='text-xl  font-semibold'>Hire Me</button>
      </nav>
      
        </div>
    );
};

export default Header;