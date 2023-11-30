import {
    useQuery,
 
  } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic';
import { useEffect, useState } from 'react';

const useData = () => {
    const axiosPublic=useAxiosPublic()
    const [premiumData, setData] = useState([]);
 
 

    const {data:items=[], isPending:loading,refetch}=useQuery({
        queryKey:['items'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/cards')
            return res.data
        }
    })
    const male =items.filter(item=>{
     
        return item.biodataType === 'Male'
         
     })
    const female =items.filter(item=>{
     
        return item.biodataType === 'Female'
         
     })
    
   useEffect(()=>{
    const premiumDatas =items.filter(item=>{
     
        return item.premiumMember === 'yes'
         
     })
    const sortedPremiumData = premiumDatas.sort((a, b) => a.age - b.age);
  


    setData(sortedPremiumData);
 

   },[])
    return [items,loading,refetch,premiumData,male,female]
};

export default useData;