
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Headings from "../../Headings";
import { useSpring, animated  } from '@react-spring/web';
import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider";



const MyFav = () => {
    
    const AxiosSecure=useAxiosSecure()
 const {user}=useContext(AuthContext)
    

 
        
     
     
    
        const {data:items=[], refetch}=useQuery({
            queryKey:['email',user?.email],
            queryFn:async()=>{
                const res=await AxiosSecure.get(`/bookmarks?email=${user?.email}`)
              
                return res.data
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
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 500 },
    });
    return (
          <animated.div style={fadeIn} className='max-w-5xl mx-auto mb-10'>
        <Headings heading={" My Favourite Bio-Data's"} subheading={"In this section, you can view all the biodatas you have bookmarked. Easily access the profiles you are most interested in and keep track of your favorite matches. This personalized list ensures that you can quickly revisit and review the biodatas that caught your attention, making your search for a partner more organized and efficient."}></Headings>
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
{items && items.length > 0 ? (
  items.map((item, index) => (
    <tbody key={item._id}>
      <tr>
        <th>{index + 1}</th>
        <td>{item.biodataId}</td>
        <td>{item.name}</td>
        <td>{item.permanentDivision}</td>
        <td>{item.occupation}</td>
        <td>
          <button
            onClick={() => handledelete(item.biodataId)}
            className="btn btn-danger bg-[#ff3366] border-none"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  ))
) : (
  <tr className="text-center text-xl font-bold text-red-500 ">No Saved Favourite Data</tr>
)}

 
</table>
</div>
    </animated.div>
    );
};

export default MyFav;