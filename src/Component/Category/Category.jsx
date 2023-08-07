import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {

     const [jobs,setJobs] = useState([]);

      useEffect(()=>{
         
          fetch('/job_category.json').then( res  => res.json()).then(data => setJobs(data));

      },[])

    return (
        <div>
             <p className='text-center text-4xl font-bold mt-7 mb-5'>Popular Categories</p>
             <p className='text-center mb-5 text-slate-400 '>Search all the open positions on the web. Get your own personalized salary <br></br>estimate. Read reviews on over 30000+ companies worldwide.</p>
             
             <div className='flex flex-col mx-5 gap-4 lg:flex-row lg:gap-12  lg:ml-62 mb-14'>
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