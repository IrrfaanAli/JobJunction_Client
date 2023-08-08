import React from 'react';
import { Link } from 'react-router-dom';
import { MdAttachMoney } from "react-icons/md"
import { MdLocationOn } from "react-icons/md"

const SingleJob = (props) => {

    const {id,title,company,location,salary,job_type,logo} = props.job;
    return (
        <div className='border-solid border-2 bg-white  w-48  ml-12  lg:w-80 p-3 lg:p-12 ' >
            
            <img className='mb-3' src={logo} alt="" />
             <p className='font-bold text-xl mb-1'>{title}</p>
              <p>{company}</p> 
               <div className='flex mt-2'>
                
                <p className='mr-5 border-solid border-2 border-green-800 p-1 rounded-md '>{job_type[0]}</p>
                
                 <p className='border-solid border-2 border-green-800 rounded-md p-1'>{job_type[1]}</p>
               </div>
              <div className=' mb-5 mt-2'>
                <div className='flex'> <MdLocationOn className='mt-1' /> { location}</div>
                <div className='flex'> <MdAttachMoney className='mt-1' />{salary}</div>
              </div>
             <Link to={`feature/${id}`}  className='p-2 ml bg-green-800 rounded-md text-white '>View details</Link>
              
        </div>
    );
};

export default SingleJob;