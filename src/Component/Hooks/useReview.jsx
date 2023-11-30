import {
    useQuery,
 
  } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic';
import { useEffect, useState } from 'react';

const useReview = () => {
    const axiosPublic=useAxiosPublic()
   
 
       
             const {data:reviews=[], isPending:loading2,refetch :refetch2}=useQuery({
        queryKey:['reviews'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/reviews')
            return res.data 
        }  })
            return [reviews,loading2,refetch2]

     
    
};

export default useReview;