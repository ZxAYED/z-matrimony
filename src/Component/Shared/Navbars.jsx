import logo from '../../assets/logo.webp'
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { toast } from 'react-toastify';
import useUsers from '../Hooks/useUsers';
import { useEffect } from 'react';
import { useState } from 'react';


const Navbars = () => {
  const { user, logOut } = useContext(AuthContext)
  const [items]=useUsers()
 
  const [item, refetch] = useUsers()
  const [isAdmin,setEmail]=useState(false)
  const photo=user?.photoURL || setEmail.Image
useEffect(()=>{
  const email = item?.find(item1 => item1?.UserEmail === user?.email) 
  setEmail(email?.Role)

},[])

console.log(isAdmin);
  const navlinks = <>
{/* bg-[#00cc66] btn  hover:bg-[#4a90e2] */}
    <NavLink to='/' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white" : ""
    }><li className='hover:text-white font-medium text-xl 
 '>Home</li></NavLink>

    <NavLink to='/Biodatas' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white" : ""
    }><li className='hover:text-white font-medium text-xl'>Biodatas</li></NavLink>

{
  user ? (
    isAdmin ? (
      <NavLink 
        to='/Dashboard/admin' 
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white" : ""
        }>
        <li className='hover:text-white font-medium text-xl'>DashBoard</li>
      </NavLink>
    ) : (
      <NavLink 
        to='/Dashboard/' 
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white" : ""
        }>
        <li className='hover:text-white font-medium text-xl'>DashBoard</li>
      </NavLink>
    )
  ) : ''
}


    <NavLink to='/About' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white" : ""
    }>
      <li className='hover:text-white font-medium text-xl'>About us</li></NavLink>

    <NavLink to='/Contact' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white" : ""
    }>
      <li className='hover:text-white font-medium text-xl'>Contact Us</li></NavLink>




  </>

  const handleLogOut = () => {
    logOut()
      .then(res => {
        toast.success(`Log Out successFull`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })
  }
  return (
    <Headroom>


      <div className="bg-[#ff3366] h-[80px]">
        <div className="navbar gap-4 items-center   max-w-7xl mx-auto   ">

          <div className="navbar-start  ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex flex-column  justify-center items-center gap-4  text-lg ">
                {navlinks}
              </ul>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <img className='w-10 h-10 rounded-[50%] object-cover' src={logo} alt="" />
              <a className="btn btn-ghost  text-white text-2xl">TaqWaMate</a></div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  px-1 flex flex-column py-4 justify-center items-center gap-6  text-lg ">
              {navlinks}
            </ul>
          </div>
          <div className="flex justify-end items-center w-1/3">
{
  !user ?

         <NavLink to='/Login' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""}>
              <button className='hover:bg-[#00cc66] border-white border-[1px] btn w-10 lg:w-16 text-white  bg-[#4a90e2] '>Login</button>
            </NavLink>:<div className="dropdown dropdown-end">

              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                <div className="w-10 lg:w-16  rounded-full">
                  <img alt="User profile" src={photo} />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <button onClick={handleLogOut}>Logout</button>
              </ul>
            </div>

}



          </div>
        </div>


      </div>
    </Headroom>












  );
};

export default Navbars;