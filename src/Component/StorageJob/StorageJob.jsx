import React from 'react';
import { Link } from 'react-router-dom';
import './StorageJob.css'

const StorageJob = ({job}) => {

    const {id,title,company,location,salary,job_type,logo} = job;


    return (
         
        <div className=' flex items-center justify-around  gap-0  border-solid border-2 border-indigo-200 mb-6 ml-72 mt-4 p-5' id='btn'>
           <div className='flex '>
           <div >
            <img className='mr-7 mt-20' src={logo} alt="" />
           </div>
           <div>
            <p className='mb-3 text-2xl'>{title}</p> 
             <p className='mb-3 text-xl'>{company}</p>
             <div className='flex mb-3'>
                <div> <p className='mr-5 border-solid border-2 border-indigo-300 p-1 '>{job_type[0]}</p></div>
                <div><p className='mr-5 border-solid border-2 border-indigo-300 p-1 '>{job_type[1]}</p></div>
             </div>
             <div className='flex'>
                <div className='mr-5'>Location : {location}</div>
                <div>Salary : {salary}</div>
             </div>
           </div>
           </div>
           <div> <Link to={`../feature/${id}`} id='header-button' className='p-5 text-xl ml'>View details</Link></div>
        </div>
    );
};

export default StorageJob;