import React from 'react';

const SingleCategory = (props) => {

    const {title,logo,jobs} =props.jobs;
    return (
        <div className='bg-hero p-4 rounded-lg lg:p-12'>
              <img src={logo} alt="" />
               <p className='font-bold text-xl mt-5 mb-5 text-green-800'>{title}</p>
               <p className='text-slate-400'>{jobs}  Job</p>
        </div>
    );
};

export default SingleCategory;