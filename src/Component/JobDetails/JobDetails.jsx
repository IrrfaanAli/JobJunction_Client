import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
     const jobs = useLoaderData();
      const {id} = useParams();

      const [jobdetails,setjobdetails] = useState({});

       useEffect(()=>{
         const jobData = jobs.find(jobid => jobid.id == id);
        // console.log(jobData)
         setjobdetails(jobData);
       },[])
       
    return (
        <div>
              <p>{jobdetails.location}</p>
        </div>
    );
};

export default JobDetails;