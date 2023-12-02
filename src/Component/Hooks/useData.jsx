import {
    useQuery,
 
  } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic';
import {  useState } from 'react';

const useData = () => {
    const axiosPublic=useAxiosPublic()
const [loading,setLoading]=useState()
    
 
 

    const {data:items=[], isPending,refetch}=useQuery({
        queryKey:['items'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/cards')
            setLoading(isPending)
            return res.data
        }
    })

 
   
    
 
 


    return [ items,loading,refetch, ]
};

export default useData;