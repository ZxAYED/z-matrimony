import { useContext } from "react";
import useData from "../Hooks/useData";
import { AuthContext } from "../Authentication/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Audio } from "react-loader-spinner";

const PrivateRoute = () => {
    const[ loading]=useData()
    const {loading:loading2,user}=useContext(AuthContext)

if(loading || loading2){
   
    <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />


}











};

export default PrivateRoute;