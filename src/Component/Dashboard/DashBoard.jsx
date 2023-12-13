import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-toastify";
import logo from '../../assets/logo.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import useUsers from "../Hooks/useUsers";
import { useEffect } from "react";
import { MdDashboard } from "react-icons/md"; 



const DashBoard = () => {
    const navigate = useNavigate()
    const [item, refetch] = useUsers()
    const { user } = useContext(AuthContext)
    const email = item.find(item1 => item1.UserEmail === user.email)

    useEffect(()=>{
        AOS.init();
      },[])
        



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
        <div className="flex  flex-col lg:flex-row">
            <section  data-aos="fade-up"
        data-aos-anchor-placement="top-center" className="w-full  lg:w-[16%]   bg-[#ff3366] min-h-screen">
                <div  className='flex justify-center  pt-5 items-center gap-2'>
                    <img className='w-10 h-10 rounded-[50%] object-cover' src={logo} alt="" />
                    <a className=" -ghost  text-white text-2xl">TaqWaMate</a></div>
                <h1 className="flex justify-center items-center my-4 font-semibold text-white"> User :{user.email}</h1>
                <div className="flex flex-col    items-left pl-10">
                    <h1 className="text-xl font-black my-6 text-white ">Dashboard Routes  </h1>
                    { 
                 

                 email?.Role ==='admin'? <div> <div className="">

                            <p className='hover:text-white my-4 font-semibold
                        ' > <NavLink to='/Dashboard/admin' className={({ isActive, isPending }) =>
                                isPending ? " pending" : isActive ? "   font-bold text-white" : "hover:text-white font-semibold"
                            }> Admin's DashBoard</NavLink></p>
                            <p className='hover:text-white font-semibold my-4
                        ' > <NavLink to='/Dashboard/admin/approve' className={({ isActive, isPending }) =>
                                isPending ? " pending" : isActive ? "   font-bold text-white" : "hover:text-white font-semibold"
                            }>Approve Contact Request </NavLink></p>
                            <p className='hover:text-white font-semibold my-4
                        ' > <NavLink to='/Dashboard/admin/contact' className={({ isActive, isPending }) =>
                                isPending ? " pending" : isActive ? "   font-bold text-white" : "hover:text-white font-semibold"
                            }> Approve Premium </NavLink></p>
                            <p className='hover:text-white font-semibold my-4
                        ' > <NavLink to='/Dashboard/admin/Users' className={({ isActive, isPending }) =>
                                isPending ? " pending" : isActive ? "   font-bold text-white" : "hover:text-white font-semibold"
                            }> Manage Users</NavLink></p>
                            
                            </div> </div>
                            
                            
                            : <div> <p className='hover:text-white font-semibold my-4
                                               ' > <NavLink to='/Dashboard' className={({ isActive, isPending }) =>
                                    isPending ? " pending" : isActive ? "   font-bold text-white" : " hover:text-white font-semibold"
                                }>Create Bio-Data</NavLink></p>
                            <p className='hover:text-white font-semibold my-4
                                               '>      <NavLink to='/Dashboard/ViewBioData' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "  hover:text-white font-semibold bg-[#4a order-none" : " hover:text-white font-semibold"
                                }>Update Bio-data</NavLink></p>
                            <p className='hover:text-white font-semibold my-4
                                               '>      <NavLink to='/Dashboard/MyContactReq' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " hover:text-white font-semibold bg-[#4a order-none" : " hover:text-white font-semibold"
                                }>My Contact Requests</NavLink></p>
                            <p className='hover:text-white font-semibold my-4
                                               '>      <NavLink to='/Dashboard/MyFav' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " hover:text-white font-semibold bg-[#4a order-none" : " hover:text-white font-semibold"
                                }>My Favourite Bio-data's</NavLink></p>
                            <p className='hover:text-white font-semibold my-4
                                               '>      <NavLink to='/Dashboard/Married' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " hover:text-white font-semibold " : " hover:text-white font-semibold"
                                }>Got Married </NavLink></p>
                           </div>
                    }



                </div>
                <hr className='h-2  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800"  my-6 w-full  lg:w-[80%] mx-auto' />

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