
import axios from "axios";
export const AxiosSecure = axios.create({
    baseURL: 'https://z-matrimony-server.vercel.app'
},{Credential:true})
const useAxiosSecure = () => {
    return AxiosSecure;


};

export default useAxiosSecure;