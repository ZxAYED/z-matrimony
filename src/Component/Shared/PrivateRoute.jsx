import { useContext } from "react";
import useData from "../Hooks/useData";
import { AuthContext } from "../Authentication/AuthProvider";



import { Navigate, useLocation, useNavigate } from "react-router-dom";
import loadingz from "../../../public/loading.json";
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
 
    const navigate = useNavigate()
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)
    if (user) {
        return children
    }
    if (loading ) {

       return <>
       <div className='max-h-screen flex justify-center mt-20 md:mt-60 items-center'>
             <Lottie className='w-[200px]  ' animationData={loadingz} loop={true} />

             </div>

        </>
    }

    return <Navigate to='/Login' state={{ from: location }} replace></Navigate>



};

export default PrivateRoute;