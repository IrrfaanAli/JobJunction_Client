import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <div className='p-36 bg-hero'>
      {/* <div className='p-24'>
        <p className='text-5xl font-bold'>One Step</p> <br></br>
        <p className='text-5xl font-bold'>Closer To Your</p> <br></br>
        <p className='text-5xl font-bold' id='job'>Dream Job</p>

        <p className=' w-42 lg:w-96 mt-7 mb-7 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
         <button id='header-button' > Get Started</button>
      </div>
      <div >
         <img className='w-full h-full' src="headerphoto.png" alt=" " />
      </div> */}
      <div className=' text-center'>
        <div className='text-6xl mb-4 font-bold'>
          <p className='text-black'>Join us & <span className='text-green-800'>Explore</span>
            <br /> <span className='text-green-800'> Thousands</span> of Jobs</p>
        </div>
        <div>
          <p className=' text-slate-400 '>Find Jobs, Employment & Career Opportunities. Some of the companies <br></br> we've helped recruit excellent applicants over the years.</p>
        </div>

        <div className='flex justify-center mt-7'>
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search Your Keywords" className="input input-bordered w-[570px] h-14" />
              <button className="btn btn-square h-14 w-24 bg-green-800">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
               <p className='text-white font-bold'>Search</p>
              </button>
            </div>
          </div>
          
        </div>
         
        <small className='text-slate-400'> Popular Searches : Designer, Developer, Web, IOS, PHP  Engineer</small>
      </div>
    </div>
  );
};

export default Hero;