import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../Authentication/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headings from '../../Headings';
import Butoon from '../../../Shared/Butoon';
import { useEffect } from 'react';
import ViewForm from './ViewForm';
import { useQuery } from '@tanstack/react-query';
const ViewBiodata = () => {
  
    const AxiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
   const [data,setData]=useState()

    const {data:items=[], isPending,refetch}=useQuery({
      queryKey:['email',user?.email],
      queryFn:async()=>{
          const res=await AxiosSecure.get(`/cards/user?email=${user?.email}`)
        res.data.forEach(item=>setData(item))
         return res.data
      }
  })

   
   
 





    return (
        <div  >
      <Headings heading="View & Edit Your Biodata" subheading={"Take control of your profile information. In this section, you can easily upload or edit your biodata to ensure that your profile reflects your true self. Whether you have new details to add or want to update existing information, managing your biodata is simple and straightforward. Your profile is a key part of your journey, and keeping it up-to-date ensures that you make meaningful connections on your path to finding a life partner"}></Headings>
        <div className='text-black  rounded-2xl'>
              
 <ViewForm data={data} refetch={refetch} ></ViewForm>
  
          </div> 
          </div>
    );
};

export default ViewBiodata;