


import Swal from "sweetalert2";



import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Headings from "../Headings";

import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const AdminApprove = () => {
    const { user } = useContext(AuthContext)
    const { data: items = [], refetch } = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async () => {
            const res = await AxiosSecure.get(`/requested/user?email=${user?.email}`)

            return res.data
        }

    })
    console.log(items);
    const AxiosSecure = useAxiosSecure()


    const handlePremium = id => {

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
                    .then(res => {

                        if (res.data) {
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
            <Headings heading={" Approve to Premium"} subheading={"Unlock a world of exclusive features and elevate your matrimony experience by upgrading to Premium. Enjoy advanced search filters, priority profile visibility, and enhanced communication tools. With Premium membership, you gain access to a suite of premium features designed to maximize your chances of finding the perfect match. Invest in your journey and discover the benefits of a Premium membership today.."}></Headings>
            <div className="overflow-x-auto">
          
               <table className="table text-lg table-zebra">

                <thead className="text-lg font-bold">
                    <tr>
                        <th>Bio-Data Id </th>

                        <th>User Email</th>




                        <th>Make Premium</th>

                    </tr>
                </thead>
                
                 {
                    items?.map((item) => <tbody key={item._id}>
                        <tr>
                            <th>{item.biodataId}</th>

                            <td>{item.UserEmail} </td>


                            <td className="uppercase">{item.status === 'pending' ? <button onClick={() => handlePremium(item.biodataId)} className="btn btn-danger bg-[#ff3366] border-none" >Make Premium</button> : item.status}</td>


                        </tr>

                    </tbody>)
                }
            </table> 
            </div>
        </div>
    );
};



export default AdminApprove;