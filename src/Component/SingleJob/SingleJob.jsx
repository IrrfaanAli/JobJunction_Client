import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = (props) => {

    const {id,title,company,location,salary,job_type} = props.job;
    return (
        <div >
              <p>{id}</p>
             <p>{title}</p>
              <p>{company}</p> 
              <div className='flex'>
                <div>{location}</div>
                <div>{salary}</div>
              </div>
             <Link to={`feature/${id}`}>View details</Link>
              
        </div>
    );
};

export default SingleJob;