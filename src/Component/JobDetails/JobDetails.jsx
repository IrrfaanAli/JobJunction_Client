import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

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
        <div className='flex'>
              <div>
               <p>Job Description : {jobdetails.description} </p>
               <p>Job Responsibility : {jobdetails.job_responsibility} </p>
               <p>Educational Requirements:
                 {jobdetails.education_requirement} 
                 </p>
               <p>Experiences :
                 {jobdetails.experiences} Years in this field 
                 </p>
              </div>
              <div className='bg-gray-200 p-7'>
                 <p>Job Details</p>
                  <p>Salary: {jobdetails.salary}</p>
                  <p>Job Title: {jobdetails.title}</p>
                   <p>Contact Information</p>
                    <p>Phone : {jobdetails.phone}</p>
                    <p>Email : {jobdetails.email}</p>
                    <p>Address: {jobdetails.location}</p>
                    <div>
                        <Link to={"/applyjob"}>Apply Now</Link>
                    </div>
              </div>
        </div>
    );
};

export default JobDetails;