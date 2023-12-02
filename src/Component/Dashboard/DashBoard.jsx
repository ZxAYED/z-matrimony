import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-toastify";


const DashBoard = () => {
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
    }
    return (
        <div className="flex ">
            <section className="w-[16%]   bg-[#ff3366] min-h-screen">
                <div className="flex flex-col pt-10  items-left pl-10">
                    <h1 className="text-xl font-black my-6 text-white ">Dashboard Routes  </h1>
                    <p className='hover:text-white my-4
 ' > <NavLink to='/Dashboard' className={({ isActive, isPending }) =>
                            isPending ? " pending" : isActive ? " btn  bg-[#4a90e2] border-none hover:text-white" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>Edit Bio-Data</NavLink></p>
                    <p className='hover:text-white my-4
 '>      <NavLink to='/Dashboard/ViewBioData' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " btn hover:text-white bg-[#4a90e2] border-none" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>View Bio-data</NavLink></p>
                    <p className='hover:text-white my-4
 '>      <NavLink to='/Dashboard/MyContactReq' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "btn hover:text-white bg-[#4a90e2] border-none" : "bg-[#00cc66] btn border-none hover:text-white"
                        }>My Contact Requests</NavLink></p>
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
            <section className="w-[84%] mx-auto">
                <Outlet></Outlet>
            </section>

        </div>
    );
};

export default DashBoard;