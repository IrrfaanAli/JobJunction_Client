import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {

     const [jobs,setJobs] = useState([]);

      useEffect(()=>{
         
          fetch('job_category.json').then( res  => res.json()).then(data => setJobs(data));

      },[])

    return (
        <div>
             <p className='text-center text-3xl font-bold mt-7 mb-5'>Job Category List</p>
             <p className='text-center mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             
             <div className='flex gap-24  justify-evenly'>
                 {
                    jobs.map(job=> <SingleCategory
                     key = {job.id}
                     jobs = {job}
                    ></SingleCategory>)
                 }
             </div>

        </div>
    );
};

export default Category;