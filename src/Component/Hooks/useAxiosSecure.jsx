
import axios from "axios";
export const AxiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
},{Credential:true})
const useAxiosSecure = () => {
    return AxiosSecure;


};

export default useAxiosSecure;