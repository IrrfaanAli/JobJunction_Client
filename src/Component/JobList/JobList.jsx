import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import './JobList.css'
import { MdArrowRightAlt } from "react-icons/md";

const JobList = () => {

    const [jobList, setjobList] = useState([]);
    const [full, setfull ] = useState([]);

    useEffect(() => {

        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => 
 
         setjobList(data));
    }, []);
    


     
    return (
        <div  className='bg-hero2'>
            <p className='text-center font-bold mb-3 text-4xl'>Featured Jobs</p>
            <p className='text-center mb-7 text-slate-400'>Search all the open positions on the web. Get your own personalized salary <br></br> estimate. Read reviews on over 30000+ companies worldwide.</p>

            <div className='grid grid-cols-1  ml-7 lg:grid-cols-3 gap-7 lg:ml-72 ' id='page'>
                {
                   full === true ?  jobList.map(job => <SingleJob

                        key={job.id}
                        job={job}

                    ></SingleJob>) :  jobList.slice(0,6).map(job => <SingleJob

                        key={job.id}
                        job={job}

                    ></SingleJob>)
                }
            </div>

            <div className='flex'><button  className='seebutton text-slate-400  p-3 rounded-md' onClick={()=>setfull(!full)}>See all jobs </button> <MdArrowRightAlt className='mt-8 ml-[-7px]'/></div>
        </div>
    );
};

export default JobList;