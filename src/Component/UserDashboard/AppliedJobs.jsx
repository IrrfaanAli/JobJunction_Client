import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AppliedJobs = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/apply')
        return res.data;
    })
    return (
        <div className="w-full">


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>
                                Instructor Name</th>
                           
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img className=" w-16 h-16 rounded-full" src={user.image} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.instructorname}</td>
                               
                                <td>{user.price}</td>

                                <td></td>
                            </tr>)
                        } */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;