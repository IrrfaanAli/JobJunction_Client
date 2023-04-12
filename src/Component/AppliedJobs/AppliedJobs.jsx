import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StorageJob from '../StorageJob/StorageJob';

const AppliedJobs = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [isSelected, setisSelected] = useState(false);


    const cart = useLoaderData();
    //console.log(cart[0].job_type)
    const handleChange = (value) => {

        setSelectedItem(value);
        setisSelected(true)

    }




    const filterItem = cart.filter(jobItem => jobItem.job_type[1] === selectedItem);

    //console.log(filterItem);


    return (
        <div>
            <button onClick={() => handleChange('On Site')} className='bg-teal-400 mt-5 p-2' >On-Site</button>
            <button onClick={() => handleChange('Remote')} className='bg-cyan-400 mt-5 ml-2 p-2'>Remote</button>
            {

                selectedItem === "On Site" || "Remote" && isSelected === true ? filterItem.map(job => <StorageJob
                    key={job.id}
                    job={job}
                ></StorageJob>) : cart.map(job => <StorageJob
                    key={job.id}
                    job={job}
                ></StorageJob>)
            }
        </div>
    );
};

export default AppliedJobs;