import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import './index.css'
import Blogs from './Component/Blogs/Blogs';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import JobDetails from './Component/JobDetails/JobDetails';
import HomeRouter from './Component/HomeRoute/HomeRoute';
import Chart from './Component/Chart/Chart';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <p>nai egula</p>,
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
      {
        path:"statistics",
        element: <Chart></Chart>,
        
      },
      {
        path:"blog",
        element:<Blogs></Blogs>,
        
      },
      {
        path:"appliedjobs",
        element:<AppliedJobs></AppliedJobs>,
        
      }
    ], 
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
