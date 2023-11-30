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
    
   useEffect(()=>{
    const premiumDatas =items.filter(item=>{
     
        return item.premiumMember === 'yes'
         
     })
    const sortedPremiumData = premiumDatas.sort((a, b) => a.age - b.age);
  


    setData(sortedPremiumData);
 

   },[])
    return [items,loading,refetch,premiumData]
};

export default useData;