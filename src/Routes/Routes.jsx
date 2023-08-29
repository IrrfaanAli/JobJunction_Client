import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import JobDetails from "../Component/JobDetails/JobDetails";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import HomeRouter from "../Component/HomeRoute/HomeRoute";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Component/Dashboard/Dashboard"
 import AdminRoute from "../Routes/AdminRoute";
 import HostRoute from "../Routes/HostRoute";
import UserRoute from "../Routes/UserRoute";
import JobPage from "../Component/JobPage/JobPage";
import AppliedJobs from "../Component/UserDashboard/AppliedJobs";
import SelectedJobs from "../Component/UserDashboard/SelectedJobs";
import AdminManageUser from "../Component/AdminDashboard/AdminManageUser";
import AdminHome from "../Component/AdminDashboard/AdminHome";
import HostAddJob from "../Component/HostDashboard/HostAddJob";
import HostJobs from "../Component/HostDashboard/HostJobs";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:"/",
          element: <HomeRouter></HomeRouter>,
          
        },
        {
          path:"feature/:id",
          element: <JobDetails></JobDetails>,
          loader: () => fetch(`/jobs.json`)
        },
        // {
        //   path:"statistics",
        //   element: <Chart></Chart>,
          
        // },
         {
           path : "login",
           element : <Login></Login>
         },
        
         {
           path : "signup",
           element : <Signup></Signup>
         },
        {
          path:"job",
          element:<JobPage></JobPage>,
          
        }
        
      ], 
    },
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [          
            {
                path : 'appliedjobs',
                element : <UserRoute><AppliedJobs></AppliedJobs></UserRoute> 
            },
            {
              path : 'selectedjobs',
              element :<UserRoute><SelectedJobs></SelectedJobs></UserRoute>
          },
          {
             path : 'adminhome',
             element : <AdminHome><AdminHome></AdminHome></AdminHome> 
          },
          {
            path : 'adminmanageuser',
            element :<AdminRoute><AdminManageUser></AdminManageUser></AdminRoute>
          },
          {
            path : 'hostaddjob',
            element :<HostRoute><HostAddJob></HostAddJob></HostRoute>
          },
          {
            path : 'hostjobs',
            element :<HostRoute><HostJobs></HostJobs></HostRoute>
          }
        ]
    }   
  ]);