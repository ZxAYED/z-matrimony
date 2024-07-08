
import Headings from './Headings';

import { AxiosSecure } from '../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';

import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const MyContactReq = () => {
  const {user}=useContext(AuthContext)
 
 
   
   const {data:items=[], refetch}=useQuery({
    queryKey:['email',user?.email],
    queryFn:async()=>{
        const res=await  AxiosSecure.get(`/requested/user?email=${user?.email}`)
      
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
            AxiosSecure.delete(`/requested/${id}`)
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
// jodi data na thake taile add korar ppop up dite hbe

    return (
        <div className='max-w-5xl mx-auto mb-10'>
            <Headings heading={" My Contact Request"} subheading={"Explore a curated collection of biodatas you've saved in the 'View My Request' section. These profiles have captured your interest and are potential matches for your journey in finding a life partner. Easily manage and keep track of your bookmarked biodatas here. Your saved selections are a personalized gallery, carefully chosen to align with your preferences and aspirations. Dive into this collection to discover profiles that resonate with you, bringing you one step closer to the perfect connection."}></Headings>
          <div className="overflow-x-auto">
 
  
 
<table className="table text-lg table-zebra">

<thead className="text-lg font-bold">
  <tr>
    <th>Index</th>
    <th>Name</th>
    <th>Bio-Data Id</th>
    <th>Status </th>
    <th>Mobile No </th>
    <th>Contact Email </th>
    <th>Action</th>
  </tr>
</thead>
{ items && items.length>0 ? (items?.map((item,index)=><tbody key={item._id}>

<tr>
  <th>{index +1}</th>
  <td>{item.name}</td>
  <td>{item.biodataId}</td>
  <td>{item.status}</td>
  <td>{item.status==='available' ? item.phoneNumber :'Pending'}</td>
  <td>{item.status==='available' ? item.contactEmail :'Pending'}</td>
  <td><button onClick={()=>handledelete(item.biodataId)} className="btn btn-danger bg-[#ff3366] border-none" >Delete</button></td>
  
</tr>

</tbody>)): (
  <tr className="text-center text-xl font-bold text-red-500 ">No Saved Requested Contact Data</tr>
)
    
}
</table>
</div>
    </div>
  

      
    );
};

export default MyContactReq;