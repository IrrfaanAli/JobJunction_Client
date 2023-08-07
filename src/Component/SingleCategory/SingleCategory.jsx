import React from 'react';

const SingleCategory = (props) => {

    const {title,logo,jobs} =props.jobs;
    return (
        <div className='bg-hero p-7 lg:p-16'>
              <img src={logo} alt="" />
               <p className='font-bold text-xl mt-5 mb-5 text-green-800'>{title}</p>
               <p>{jobs}  Job</p>
        </div>
    );
};

export default SingleCategory;