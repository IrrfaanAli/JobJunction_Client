import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import './index.css'
import Blogs from './Component/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
       path: "/blogs",
       element: <Blogs></Blogs>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
