import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import useHost from '../../hooks/useHost';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';

const Header = () => {

  // const [theme,setTheme] =useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");

  // useEffect(() =>{
  //  localStorage.setItem("theme",theme);
  //  const localTheme = localStorage.getItem("theme");
  //  document.querySelector("html").setAttribute("data-theme",localTheme);
  // },[theme])
 const { user, logout } = useContext(AuthContext);
 const [isHovering,setIsHovering] = useState(false);
 const [isHost] = useHost();
  const [isAdmin] = useAdmin();
  const [isUser] = useUser();

//  console.log(isSeeker)
//  console.log(user)
  // const handleToggle = (e) =>{

  //  if(e.target.checked){
  //     setTheme("dark")
  //  }else{
  //     setTheme("light");
  //  }
  // }
 const handleLogOut = () => {
   logout()
     .then()
     .catch(error => {
       console.log(error);
     })
 }

 const handleMouseEnter = () => {
   setIsHovering(true);
 };

 const handleMouseLeave = () => {
   setIsHovering(false);
 };
    return (

     <nav className=' lg:flex lg:justify-between items-center lg:p-9 bg-hero mt-5 '>
          <h2 className='font-bold ml-7 text-xl text-green-800 lg:text-4xl items-center'>WorkZen</h2>
         <ul className=' flex lg:flex items-center'>
         <Link to={`/`}> <li className='m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Home</li></Link>
         <Link to={`/job`}> <li className='m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Job</li></Link>
         { isUser &&  <Link to={'/dashboard/appliedjobs'}><button className="m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold">Dashboard</button></Link>}
         { isAdmin &&  <Link to={'/dashboard/adminhome'}><button className="m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold">Dashboard</button></Link>}
         { isHost &&  <Link to={'/dashboard/hostdashboard'}><button className="m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold">Dashboard</button></Link>}
       <Link to={`/appliedjobs`}> <li className='m-3 lg:m-5 text-slate-400 lg:text-2xl font-bold'>Applied Jobs</li></Link>
       <Link to={`/`}> <li className='m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Contact</li></Link>
    {/* /  <Link to={`/blog`}><li className=' m-3 lg:m-5 lg:text-2xl text-slate-400 font-bold'>Blog</li></Link>  */}
        </ul>
        <div className='flex gap-2'>
        {/* <Link to={`/login`}> <button className='text-white bg-green-800 p-3 w-24 rounded-sm'>Login </button></Link>  */}
        
        </div>
         
        <div >

{user ? (

  <div
    className="relative cursor-pointer"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className='flex gap-2'>
      <img className='rounded-full w-12 h-12 ' src={user.photoURL} alt="" />

      <button onClick={handleLogOut} className='bg-green-800 text-white p-3 rounded'>LogOut</button>
    </div>

    {isHovering && (
      <div className="absolute transform -translate-x-1/2 bg-white shadow-lg rounded-lg py-2 px-4">
        <p className="text-gray-800">{user.displayName}</p>
      </div>
    )}
  </div>
) : (
  <Link to={'/login'}><button className='bg-green-800 text-white p-3 rounded'>LogIn</button></Link>
)}



</div>
      </nav>
     
    
       
    );
};

export default Header;
