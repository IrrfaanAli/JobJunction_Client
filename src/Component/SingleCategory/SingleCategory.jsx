import React from 'react';

const SingleCategory = (props) => {

    const {title,logo,jobs} =props.jobs;
    return (
        <div className='bg-gray-200 p-8'>
              <img src={logo} alt="" />
               <p className='font-bold mt-5 mb-5'>{title}</p>
               <p>{jobs}  Jobs Available</p>
        </div>
    );
};

export default SingleCategory;