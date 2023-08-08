import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
     <nav className=' lg:flex lg:justify-between items-center lg:p-9 bg-hero mt-5 '>
          <h2 className='font-bold ml-7 text-xl text-green-800 lg:text-4xl items-center'>WorkZen</h2>
         <ul className=' flex lg:flex items-center'>
         <Link to={`/`}> <li className='m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Home</li></Link>
         <Link to={`/`}> <li className='m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Job</li></Link>
         {/* <Link to={`/statistics`}> <li className=' m-3 lg:m-5 lg:text-2xl font-semibold'>Statastics</li></Link> */}
       <Link to={`/appliedjobs`}> <li className='m-3 lg:m-5 text-slate-400 lg:text-2xl font-bold'>Applied Jobs</li></Link>
       <Link to={`/`}> <li className='m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Contact</li></Link>
      <Link to={`/blog`}><li className=' m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Blog</li></Link> 
        </ul>
        <div className='flex gap-2'>
        <button className='text-white bg-green-800 p-3 w-24 rounded-sm'>Login </button>
        
        </div>
        
      </nav>
      
       
    );
};

export default Header;
