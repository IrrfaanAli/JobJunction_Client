
import {  Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import Category from './Component/Category/Category'
import JobList from './Component/JobList/JobList'
import Footer from './Component/Footer/Footer'
import React, { useState, useEffect } from 'react';
import { AuthContext } from './providers/AuthProviders'
import { useContext } from 'react'
function App() {
  const { logout } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const activityTimer = setTimeout(() => { 
      logout()
      .then()
      .catch(error => {
        console.log(error);
      })
     
    }, 5 * 60 * 1000);

    window.addEventListener('mousemove', resetActivityTimer);
    window.addEventListener('keydown', resetActivityTimer);

    return () => {
      clearTimeout(activityTimer);
      window.removeEventListener('mousemove', resetActivityTimer);
      window.removeEventListener('keydown', resetActivityTimer);
    };
  }, []);

  const resetActivityTimer = () => {
    
    clearTimeout(activityTimer);
    setShowLogout(false);

    
    fetch('/api/reset-activity')
      .then(response => response.json())
      .catch(error => console.error(error));
  };

  return (
    <div className="App lg:mx-32">
      
      {showLogout ? (
        <div>
          <p>You've been logged out due to inactivity.</p>
        </div>
      ) : (
        <div>
        <Header></Header>
        
       <Outlet></Outlet>
       {/* <Category></Category>
       <JobList></JobList> */}
       <Footer></Footer>
       </div>
      )}
   
      
       
    </div>
  )
}

export default App
