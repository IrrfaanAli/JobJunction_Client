
import useAdmin from '../../hooks/useAdmin';
import useHost from '../../hooks/useHost';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const JobPage = () => {
    const[isAdmin] =useAdmin()
    const[isHost] =useHost()
    const [axiosSecure] = useAxiosSecure();

    const { data: jobs = [] } = useQuery(['jobs'], async () => {
        const res = await axiosSecure.get('/jobpage')
        console.log(res.data);
        return res.data;
        
    })
    
    return (
        <div className="w-full">


            <div className="overflow-x-auto p-5">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((user, index) => <tr key={user._id } style={{ backgroundColor: user.seat === 0 ? 'red' : 'white' }}>
                                <th>{index + 1}</th>
                                {/* <td><img className=" w-16 h-16 rounded-full"  alt="" /></td> */}
                                <td>{user.title}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                 {/* <td><BookButton isAdmin={isAdmin} isInstructor={isInstructor} aviseat={user.seat} user={user}></BookButton></td> */}
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobPage;