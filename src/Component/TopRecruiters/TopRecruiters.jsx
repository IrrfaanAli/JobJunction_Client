import React from 'react';

import { MdLocationOn } from "react-icons/md"
const TopRecruiters = () => {
    return (
        <div className='bg-hero2'>
              <p className='text-center text-4xl font-bold mt-7 mb-5 p-3'>Top Recruiters</p>
             <p className='text-center mb-5 text-slate-400 '>Discover your next career move, freelance gig, or internship</p>
             <div className='flex justify-center flex-col lg:flex-row '>
             <div className='bg-green-800 text-white rounded-lg mr-3 p-7 mb-7 lg:p-12'>
             
               <p className='font-bold mt-5  mb-5 text-xl'>LinkedIN</p>
               <p className='flex'> <MdLocationOn className='mt-1'/> USA</p>
            </div>
             <div className='bg-gray-200 p-7 mb-7 rounded-lg mr-3 lg:p-12'>
             
               <p className='font-bold mt-5 mb-5 text-xl'>Adobe</p>
               <p className='flex'> <MdLocationOn className='mt-1'/>  USA</p>
        </div>
             <div className='bg-green-800 text-white rounded-lg mr-3 p-7 mb-7 lg:p-12'>
             
               <p className='font-bold mt-5 mb-5 text-xl'>NewSum</p>
               <p className='flex'><MdLocationOn className='mt-1' />Canada</p>
        </div>
             <div className='bg-gray-200 p-7 mb-7  rounded-lg mr-3 lg:p-12'>
             
               <p className='font-bold mt-5 mb-5 text-xl'>Ondo</p>
               <p className='flex'> <MdLocationOn className='mt-1'/>Finland</p>
        </div>
             <div className='bg-green-800 text-white p-7 mb-7 rounded-lg mr-3 lg:p-12'>
             
               <p className='font-bold mt-5 mb-5 text-xl'>Whop.com</p>
               <p className='flex'> <MdLocationOn className='mt-1'/>Denmark</p>
        </div>
        </div>
        </div>
    );
};

export default TopRecruiters;