import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const usePremium = () => {
    const AxiosPublic=useAxiosPublic()
const [loading,setLoading]=useState()
    const {data:premiumData=[], isPending,refetch}=useQuery({
        queryKey:['premium'],
        queryFn:async()=>{
            const res=await AxiosPublic.get('/premium')
            setLoading(isPending)
            return res.data
        }
    })
    return [premiumData,loading,refetch]
   
};

export default usePremium;