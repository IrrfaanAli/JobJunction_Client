import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import JobDetails from "../Component/JobDetails/JobDetails";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import HomeRouter from "../Component/HomeRoute/HomeRoute";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Component/Dashboard/Dashboard"
import AdminRoute from "./AdminRoute";
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
          
        },
        // {
        //   path:"appliedjobs",
        //   element:<AppliedJobs></AppliedJobs>,
        //   loader: cartProductsLoader
          
        // }
      ], 
    },
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [
            // {
            //     path : 'adminhome',
            //     element :<AdminRoute><AdminHome></AdminHome></AdminRoute> 
            // }
            {
                path : 'appliedjobs',
                element :<AppliedJobs></AppliedJobs>
            },
            {
              path : 'selectedjobs',
              element :<SelectedJobs></SelectedJobs>
          },
          {
             path : 'adminhome',
             element : <AdminHome></AdminHome>
          },
          {
            path : 'adminmanageuser',
            element : <AdminManageUser></AdminManageUser>
          },
          {
            path : 'hostaddjob',
            element : <HostAddJob></HostAddJob>
          },
          {
            path : 'hostjobs',
            element : <HostJobs></HostJobs>
          }
        ]
    }
    
    
  ]);