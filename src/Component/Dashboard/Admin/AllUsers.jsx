

import { useState } from "react";


import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Headings from "../Headings";
import { AuthContext } from "../../Authentication/AuthProvider";



const AllUsers = () => {
    
    const AxiosSecure=useAxiosSecure()
 
    const [items,setItems]=useState()


        console.log(items);
     
     
    
        const {data:item=[], refetch}=useQuery({
            queryKey:['bookmarks'],
            queryFn:async()=>{
                const res=await AxiosSecure.get(`/users`)
              
                setItems(res.data)
            }
           
        })
      

   
    const handledelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.delete(`/bookmarks/${id}`)
                .then(res=>{
            
                    if(res.data.deletedCount>0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                   
                })
             
             
            
            }
          });
    }

    return (
          <div className='max-w-5xl mx-auto '>
        <Headings heading={" My Favourite Bio-Data's"} subheading={"Explore a curated collection of biodatas you've saved in the 'View My Request' section. These profiles have captured your interest and are potential matches for your journey in finding a life partner. Easily manage and keep track of your bookmarked biodatas here. Your saved selections are a personalized gallery, carefully chosen to align with your preferences and aspirations. Dive into this collection to discover profiles that resonate with you, bringing you one step closer to the perfect connection."}></Headings>
      <div className="overflow-x-auto">
<table className="table text-lg table-zebra">

<thead className="text-lg font-bold">
  <tr>
    <th>Index</th>
    <th>Bio-Data Id</th>
    <th>Name</th>
    <th>Permanent Address</th>
    <th>Occupation</th>
    <th>Action</th>
  </tr>
</thead>
{
    items?.map((item,index)=><tbody key={item._id}>

        <tr>
          <th>{index +1}</th>
          <td>{item.biodataId}</td>
          <td>{item.name}</td>
          <td>{item.permanentDivision}</td>
          <td>{item.occupation}</td>
          <td><button onClick={()=>handledelete(item.biodataId)} className="btn btn-danger bg-[#ff3366] border-none" >Delete</button></td>
          
        </tr>
      
      </tbody>)
}
</table>
</div>
    </div>
    );
};

export default AllUsers;