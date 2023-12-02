import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-toastify";
import logo from '../../assets/logo.webp'

const DashBoard = () => {
    const navigate=useNavigate()
    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success(`Logged in successFully`, {
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
            navigate('/')
    }
    return (
        <div className="flex ">
            <section className="w-[16%]   bg-[#ff3366] min-h-screen">
                  <div className='flex justify-center  pt-5 items-center gap-2'>
        <img className='w-10 h-10 rounded-[50%] object-cover' src={logo} alt="" />
    <a className="btn btn-ghost  text-white text-2xl">TaqWaMate</a></div>

                <div className="flex flex-col   items-left pl-10">
                    <h1 className="text-xl font-black my-6 text-white ">Dashboard Routes  </h1>
                    <p className='hover:text-white my-4
 ' > <NavLink to='/Dashboard' className={({ isActive, isPending }) =>
                            isPending ? " pending" : isActive ? " btn  bg-[#4a90e2] border-none hover:text-white" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>Create Bio-Data</NavLink></p>
                    <p className='hover:text-white my-4
 '>      <NavLink to='/Dashboard/ViewBioData' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " btn hover:text-white bg-[#4a90e2] border-none" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>Update Bio-data</NavLink></p>
                    <p className='hover:text-white my-4
 '>      <NavLink to='/Dashboard/MyContactReq' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "btn hover:text-white bg-[#4a90e2] border-none" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>My Contact Requests</NavLink></p>
                    <p className='hover:text-white my-4
 '>      <NavLink to='/Dashboard/MyFav' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "btn hover:text-white bg-[#4a90e2] border-none" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>My Favourite Bio-data's</NavLink></p>
                    <p className='hover:text-white my-4
 '>      <NavLink to='/Dashboard/AllUsers' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "btn hover:text-white bg-[#4a90e2] border-none" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>All users</NavLink></p>
                </div>
                <hr className="h-2  my-6 w-[80%] mx-auto" />

                <div className="flex flex-col  items-left pl-10">
                    <p className='hover:text-white my-4 bg-[#00cc66] w-fit p-2 rounded '>
                        <NavLink to='/' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "" : ""
                        }>Home</NavLink></p>
                    <button onClick={handleLogOut} className='hover:text-white my-4 bg-[#00cc66] w-fit p-2 rounded '>
                        Log Out</button>

                </div>

            </section>
            <section className="w-[84%]  mx-auto">
                <Outlet></Outlet>
            </section>

        </div>
    );
};

export default DashBoard;