import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'
import { addToDb } from '../../../public/fakedb';

const JobDetails = () => {
     const jobs = useLoaderData();
      const {id} = useParams();

      const [jobdetails,setjobdetails] = useState([]);
      const [cart,setCart] = useState([]);

       useEffect(()=>{
         const jobData = jobs.find(jobid => jobid.id == id);
        // console.log(jobData)
         setjobdetails(jobData);
       },[])


       const handleAddToCart =(jobdetails)=>{
        let newCart = [];
          console.log(jobdetails)
        const exists = cart.find(pd =>pd.id === jobdetails.id);

        if (!exists){
          jobdetails.quantity = 1;
            newCart =[...cart,jobdetails]
        }
        else{
            exists.quantity = exists.quantity + 1 ;
            const remaining = cart.filter(pd => pd.id !== jobdetails.id);
            newCart =[...remaining ,exists]
        }
        
        setCart(newCart);
        addToDb(jobdetails.id);
     }
       
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
                        <button  className='bg-green-800 text-white p-3 ml-7' onClick={()=>handleAddToCart(jobdetails)}>Apply Now</button>
                    
              </div>
        </div>
    );
};

export default JobDetails;