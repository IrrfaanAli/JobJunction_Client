import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import './JobList.css'

const JobList = () => {

    const [jobList,setjobList] = useState([]);

    useEffect(()=>{
       
        fetch('jobs.json').then( res  => res.json()).then(data => setjobList(data));

    },[])

    return (
        <div>
             <p>Featured Jobs</p>
             <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

              <div>
                  {
                    jobList.map(job => <SingleJob
                     
                         key={job.id}
                         job ={job}
                     
                    ></SingleJob>)
                  }
              </div>

               <button id='header-button'>See all jobs</button>
        </div>
    );
};

export default JobList;