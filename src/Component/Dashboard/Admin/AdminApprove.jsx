


import Swal from "sweetalert2";




import Headings from "../Headings";

import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const AdminApprove = () => {
    const AxiosSecure=useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: items = [], refetch } = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async () => {
            const res = await AxiosSecure.get(`/requested`)

            return res.data
        }

    })
  
 
   
 
   
    


    const handleApprove = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to approve the contact ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.patch(`/users/admin/approve/${id}`)
                    .then(res => {
console.log(res.data);
                        if (res.data.modifiedCount >0) {
                            refetch()
                            Swal.fire({
                                title: "Done!",
                                text: "Contact Approved",
                                icon: "success"
                            });
                        }

                    })



            }
        });
    }

    return (
        <div className='max-w-5xl mx-auto '>
            <Headings heading={"Approve Contact Requests"} subheading={"Unlock a world of exclusive features and elevate your matrimony experience by upgrading to Premium. Enjoy advanced search filters, priority profile visibility, and enhanced communication tools. With Premium membership, you gain access to a suite of premium features designed to maximize your chances of finding the perfect match. Invest in your journey and discover the benefits of a Premium membership today.."}></Headings>
            <div className="overflow-x-auto">
          
               <table className="table text-lg table-zebra">

                <thead className="text-lg font-bold">
                    <tr>
                        <th>Bio-Data Id </th>

                        <th>User Name</th>
                        <th>User Email</th>




                        <th>Make Premium</th>

                    </tr>
                </thead>
                
                 {
                    items?.map((item) => <tbody key={item._id}>
                        <tr>
                            <th>{item.biodataId}</th>

                            <td>{item.UserName} </td>
                            <td>{item.UserEmail} </td>


                            <td className="uppercase">{item.status === 'pending' ? <button onClick={() => handleApprove(item.UserEmail)} className="btn btn-danger bg-[#ff3366] border-none" >Approve  </button> : item.status==='available' && 'Approved' }</td>
                         


                        </tr>

                    </tbody>)
                }
            </table> 
            </div>
        </div>
    );
};



export default AdminApprove;