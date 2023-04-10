import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <div className='flex gap-96 '>
      <div>
        <p className='text-5xl font-bold'>One Step</p> <br></br>
        <p className='text-5xl font-bold'>Closer To Your</p> <br></br>
        <p className='text-5xl font-bold' id='job'>Dream Job</p>

        <p className='w-36 mt-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
         <button id='header-button' > Get Started</button>
      </div>
      <div >
         <img className='w-full h-full' src="headerphoto.png" alt=" " />
      </div>

    </div>
  );
};

export default Hero;