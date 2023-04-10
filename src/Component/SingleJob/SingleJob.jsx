import React from 'react';

const SingleJob = (props) => {

    const {title,company,location,salary,job_type} = props.job;
    return (
        <div>
              
             <p>{title}</p>
              <p>{company}</p> 
              <div className='flex'>
                <div>{location}</div>
                <div>{salary}</div>
              </div>
              
        </div>
    );
};

export default SingleJob;