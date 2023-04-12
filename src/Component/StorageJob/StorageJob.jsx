import React from 'react';
import { Link } from 'react-router-dom';

const StorageJob = ({job}) => {

    const {id,title,company,location,salary,job_type,logo} = job;


    return (
         
        <div className='flex items-center justify-around gap-0 p-5'>
         
           <div className='mb-5'><img src={logo} alt="" />
           </div>
           <div>
            {title}
             {company}
             <div className='flex'>
                <div> <p className='mr-5 border-solid border-2 border-indigo-500 p-1 mr-2'>{job_type[0]}</p></div>
                <div><p className='mr-5 border-solid border-2 border-indigo-500 p-1 mr-2'>{job_type[1]}</p></div>
             </div>
             <div className='flex'>
                <div>{location}</div>
                <div>{salary}</div>
             </div>
           </div>
           <div> <Link to={`../feature/${id}`} id='header-button' className='p-2 ml'>View details</Link></div>
        </div>
    );
};

export default StorageJob;