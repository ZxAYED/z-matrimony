import axios from "axios";


const axiosPublic=axios.create({
    baseURL:'https://z-matrimony-server.vercel.app'
},{Credential:true})
const useAxiosPublic =()=>{
    return axiosPublic;
}
export default useAxiosPublic;