import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "./useAxiosSecure";


const useUsers = () => {
    const {data:items=[], refetch}=useQuery({
        queryKey:['item'],
        queryFn:async()=>{
            const res=await AxiosSecure.get(`/users`)
       
            return (res.data)
        }
        
    })
    return [items,refetch]
};

export default useUsers;