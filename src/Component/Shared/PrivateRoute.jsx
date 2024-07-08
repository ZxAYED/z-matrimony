import { useContext } from "react";
import useData from "../Hooks/useData";
import { AuthContext } from "../Authentication/AuthProvider";



import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
 
    const navigate = useNavigate()
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)
    if (user) {
        return children
    }
    if (loading ) {

       return <>
            <div className="flex flex-col justify-center items-center w-1/2 gap-5 p-2 mx-auto mt-10 md:mt-20 bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
                <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse">
                </div>
                <div className="flex flex-col flex-1 gap-5 sm:p-2">
                    <div className="flex flex-col flex-1 gap-3">
                        <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                        </div>
                        <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                        </div>
                        <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse">
                        </div>
                    </div>
                </div>
            </div>



        </>
    }

    return <Navigate to='/Login' state={{ from: location }} replace></Navigate>



};

export default PrivateRoute;