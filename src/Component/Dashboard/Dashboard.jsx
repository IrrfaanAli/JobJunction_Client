 import {  Link, Outlet } from "react-router-dom";
 import { FaHouseUser,FaChalkboardTeacher } from 'react-icons/fa';
 import { SiGoogleclassroom} from "react-icons/si";
 import { GiTeacher } from "react-icons/gi";


import useAdmin from "../../hooks/useAdmin";
import useHost from "../../hooks/useHost";
import useUser from "../../hooks/useUser";
import Header from "../Header/Header";


const Dashboard = () => {
  const [isHost] =useHost();
  const [isAdmin] = useAdmin();
  const [isUser] = useUser();
 
  

    return (
        <>
     <Header></Header>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
     {
       isAdmin  && <><Link to={'/dashboard/adminhome'}><button className="btn btn-outline btn-accent mb-5"><SiGoogleclassroom className="h-8 w-8"/>Manage Jobs</button></Link>
       <Link to={'/dashboard/adminmanageuser'}><button className="btn btn-outline btn-accent mb-5"><FaHouseUser className="h-8 w-8"/>Manage User</button></Link></> 
     }
     {
       isHost && <>
               <Link to={'/dashboard/hostjobs'}> <button className="btn btn-outline btn-accent mb-5"><GiTeacher className="w-8 h-8"/>My Jobs</button></Link>
              <Link to={'/dashboard/hostaddjob'}><button className="btn btn-outline btn-accent"><FaChalkboardTeacher className="w-8 h-8"/> Add Job</button></Link>
              
       </> 
     }
     {
       isUser && <>
        <Link to={'/dashboard/appliedjobs'}><button className="btn btn-outline btn-accent mb-5 "> My Applied Jobs</button></Link>
       <Link to={'/dashboard/selectedjobs'}> <button className="btn btn-outline btn-accent mb-5"> MY SELECTED Jobs</button></Link>
     
      
</> 
     }
     
    </ul>
  
  </div>
</div>
</>
    );
};

export default Dashboard;