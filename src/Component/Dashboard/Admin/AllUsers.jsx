




import Swal from "sweetalert2";



import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Headings from "../Headings";
import useUsers from './../../Hooks/useUsers';




const AllUsers = () => {
    
    const AxiosSecure=useAxiosSecure()
 
    const [items,refetch]=useUsers()


        
     
     
    
     
      

   
    const handleAdmin=id=>{
      console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "Make Admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.patch(`/users/admin/${id}`)
                .then(res=>{
            console.log(res);
                    if(res.data){
                        refetch()
                        Swal.fire({
                            title: "DOne!",
                            text: "Admin added",
                            icon: "success"
                          });
                    }
                   
                })
             
             
            
            }
          });
    }
    const handlePremium=id=>{
    
        Swal.fire({
            title: "Are you sure?",
            text: "Make Premium?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.patch(`/users/admin/premium/${id}`)
                .then(res=>{
            
                    if(res.data){
                        refetch()
                        Swal.fire({
                            title: "Done!",
                            text: "Premium member added",
                            icon: "success"
                          });
                    }
                   
                })
             
             
            
            }
          });
    }

    return (
          <div className='max-w-5xl mx-auto '>
        <Headings heading={" Manage Users"} subheading={"Explore a curated collection of biodatas you've saved in the All users section. These profiles have captured your interest and are potential matches for your journey in finding a life partner. Easily manage and keep track of your bookmarked biodatas here. Your saved selections are a personalized gallery, carefully chosen to align with your preferences and aspirations. Dive into this collection to discover profiles that resonate with you, bringing you one step closer to the perfect connection."}></Headings>
      <div className="overflow-x-auto">
<table className="table text-lg table-zebra">

<thead className="text-lg font-bold">
  <tr>
    <th>Index</th>
 
    <th>User Email</th>
    <th>User Name</th>
  
    
    <th>Role</th>
    <th>Make Premium</th>
    <th>Action</th>
  </tr>
</thead>
{

    items?.map((item,index)=><tbody key={item._id}>
       <tr>
          <th>{index +1}</th>
     
          <td>{item.UserEmail} </td>
          <td>{item.UserName}</td>
          <td className="uppercase">{item.Role}</td>
          <td className="uppercase">{item.Role==='user'? <button onClick={()=>handlePremium(item._id)} className="btn btn-danger bg-[#ff3366] border-none" >Make Premium</button>:item.Role }</td>
          <td className="flex  items-center">
       {item?.Role ==="admin" ?"Admin"  :<button onClick={()=>handleAdmin(item.biodataId)} className="btn btn-danger bg-[#ff3366] border-none" >Make Admin</button>
          }</td>
          
        </tr>
      
      </tbody>)
}
</table>
</div>
    </div>
    );
};

export default AllUsers;