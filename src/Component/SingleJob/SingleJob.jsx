import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = (props) => {

    const {id,title,company,location,salary,job_type,logo} = props.job;
    return (
        <div className='border-solid border-2 border-indigo-600 w-96 p-12 ' >
            
            <img className='mb-3' src={logo} alt="" />
             <p className='font-bold mb-1'>{title}</p>
              <p>{company}</p> 
               <div className='flex mt-2'>
                
                <p className='mr-5 border-solid border-2 border-indigo-500 p-1 mr-2'>{job_type[0]}</p>
                
                 <p className='border-solid border-2 border-indigo-500 p-1'>{job_type[1]}</p>
               </div>
              <div className='flex mb-5 mt-2'>
                <div>{location}</div>
                <div className='ml-5  '>{salary}</div>
              </div>
             <Link to={`feature/${id}`} id='header-button' className='p-2 ml'>View details</Link>
              
        </div>
    );
};

export default SingleJob;