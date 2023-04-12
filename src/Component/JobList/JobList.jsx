import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import './JobList.css'

const JobList = () => {

    const [jobList, setjobList] = useState([]);
    const [full, setfull ] = useState([]);

    useEffect(() => {

        fetch('jobs.json')
            .then(res => res.json())
            .then(data => 
 
                setjobList(data));
    }, []);

     
    return (
        <div >
            <p className='text-center font-bold mb-3 text-4xl'>Featured Jobs</p>
            <p className='text-center mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-1  ml-7 lg:grid-cols-2 gap-7 lg:ml-96' id='page'>
                {
                   full === true ?  jobList.map(job => <SingleJob

                        key={job.id}
                        job={job}

                    ></SingleJob>) :  jobList.slice(0,2).map(job => <SingleJob

                        key={job.id}
                        job={job}

                    ></SingleJob>)
                }
            </div>

            <button id='header-button' className='seebutton p-3' onClick={()=>setfull(!full)}>See all jobs</button>
        </div>
    );
};

export default JobList;