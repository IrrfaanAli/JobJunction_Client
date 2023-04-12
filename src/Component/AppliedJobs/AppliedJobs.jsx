import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';
import StorageJob from '../StorageJob/StorageJob';

const AppliedJobs = () => {

     const cart = useLoaderData();
     console.log(cart.length)
    return (
        <div>
             <p className='ml-96'>helel</p>
            {
                cart.map(job => <StorageJob
                 key={job.id}
                 job={job}
                ></StorageJob>)
            }
        </div>
    );
};

export default AppliedJobs;