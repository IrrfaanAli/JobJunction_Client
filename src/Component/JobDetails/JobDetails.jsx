import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

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
        <div className='flex p-32'>
              <div>
               <p className='mb-5 text-xl'><span className='font-bold text-2xl'>Job Description : </span> {jobdetails.description} </p>
               <p className='mb-5 text-xl'> <span className='font-bold text-2xl'>Job Responsibility : </span>{jobdetails.job_responsibility} </p>
               <p className='mb-5 text-xl'> <span className='font-bold text-2xl'> Educational Requirements:</span>
                 {jobdetails.education_requirement} 
                 </p>
               <p className='mb-5 text-xl'><span className='font-bold text-2xl'>Experiences : </span>
                 {jobdetails.experiences} Years in this field 
                 </p>
              </div>
              <div className='bg-gray-200 p-20 w-96 '>
                 <p className='font-bold underline mb-2'>Job Details</p>
                  <p>Salary: {jobdetails.salary}</p>
                  <p>Job Title: {jobdetails.title}</p>
                   <p className='font-bold  underline mb-2'>Contact Information</p>
                    <p>Phone : {jobdetails.phone}</p>
                    <p>Email : {jobdetails.email}</p>
                    <p className='mb-7'>Address: {jobdetails.location}</p>
                        <Link to={"/applyjob"} id='header-button' className='p-3 ml-7'>Apply Now</Link>
                    
              </div>
        </div>
    );
};

export default JobDetails;