import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";


const Checkout = () => {
    const data=useLoaderData()
    const { biodataType, profileImageLink,biodataId, permanentDivision, occupation, age, _id, contactEmail, dateOfBirth, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mothersName, name, phoneNumber, premiumMember, presentDivision, race, weight } = data
    const {user}=useContext(AuthContext)
    const email=user.email || ''
    const axiosSecure=useAxiosSecure()
    const handleRequest=()=>{
       
        const userInfo={
            biodataType, profileImageLink,biodataId, permanentDivision, occupation, age, _id, contactEmail, dateOfBirth, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mothersName, name, phoneNumber, premiumMember, presentDivision, race, weight, 
        }
       
        axiosSecure.post('/requested',userInfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                toast.success(`Request Succesfull`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
            }
        })
        .catch(err=>{
            toast.error(err, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        })
    }
    
    return (
        <div>
           
<section className="h-screen bg-gray-100/50 mt-20 mb-32">
    <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                    <a href="#" className="relative block">
                        <img alt="user profile" src={ user.photoURL} className="mx-auto object-cover rounded-full h-16 w-16 "/>
                    </a>
                    <h1 className="text-gray-600">
                        {user.displayName}
                    </h1>
                </div>
            </div>
        </div>
        <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                    Bio-data id:
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 disabled focus:ring-purple-600 focus:border-transparent" placeholder={`BioData ID: ${biodataId}`}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                User Email :
                    </h2>
                    <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                        <div>
                            <div className=" relative ">
                                <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" disabled placeholder={email}/>
                                </div>
                            </div>
                            <div>
                                <div className=" relative ">
                                    <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Self Id No:"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 className="max-w-sm mx-auto md:w-4/12">
                               Stripe Card Number
                            </h2>
                            <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                                <div className=" relative ">
                                    <input type="text" id="user-info-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Stripe Card Number"/>
                                    </div>
                                </div>
                                <div className="text-center md:w-3/12 md:pl-6">
                                    <button onClick={handleRequest} type="button" className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Proceed
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="w-full px-4 pb-4  text-gray-500 ">
                              <p> You have to pay 500 tk to see the contact information and have to wait untill admin's apporval</p>
                            </div>
                        </div>
                    </form>
                </section>

        </div>
    );
};

export default Checkout;