import { Link, useLoaderData } from "react-router-dom";
import Butoon from "../Shared/Butoon";
import { FaRegBookmark } from "react-icons/fa6";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useData from "../Hooks/useData";
import AddvetiseCard from "./AddvetiseCard";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleCard = () => {
    const [view , setView]=useState()
const {user}=useContext(AuthContext)
const UserEmail=user.email 
    //TODO :ADD SOME ICONS TO EACH SECTIONS LIKE CALL EMAIL ICONS
    const data = useLoaderData()
    const [items, loading, refetch, premiumData, male, female] = useData()
    const axiosSecure = useAxiosSecure()

useEffect(()=>{
    axiosSecure.get('/users')
.then(res=>{
const SameEmail =res.data.find(item=>item.UserEmail===user.email)
setView(SameEmail)

})

},[])

useEffect(()=>{
    AOS.init();
  },[])
    const { biodataType, profileImageLink,biodataId, permanentDivision, occupation, age, _id, contactEmail, dateOfBirth, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mothersName, name, phoneNumber, premiumMember, presentDivision, race, weight} = data
    const genderData = items.filter(item => item.biodataType.toLowerCase() === biodataType.toLowerCase())
  
    const handleBookmark = () => {
        const data2 ={UserEmail, biodataType, profileImageLink,biodataId, permanentDivision, occupation, age, id:_id, contactEmail, dateOfBirth, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mothersName, name, phoneNumber, premiumMember, presentDivision, race, weight}
        axiosSecure.post('/bookmarks', data2)
            .then(function (response) {

                toast.success(`${name} is in your list now!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
   
    return (

        <section data-aos="flip-down" className="max-w-7xl mx-auto ">
            <div className="px-4 py-12   sm:px-6 md:px-12 lg:px-0 lg:py-24">
                <div className=" gap-10 flex ">
                    <div className="w-full   lg:w-[40%] rounded-xl">

                        <div className="relative w-full max-w-lg">
                            <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>

                            <div className="absolute rounded-full bg-red-600 -bottom-24 right-20 w-72 h-[80vh] mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                            <div className="relative">
                                <img className="object-cover object-center h-[90vh] mx-auto rounded-lg shadow-2xl" alt="hero" src={profileImageLink} />

                            </div>
                        </div>
                    </div>
                    <div className="flex  flex-col items-start md:mt-12 mb-16 text-left  lg:w-[40%] lg:pl-0  md:mb-0 xl:mt-0 ">
                        <div className=" flex justify-center gap-5 items-center font-bold tracking-widest text-red-600 uppercase"> <h1 className="py-5">Biodata-type: {biodataType}</h1>  </div>
                        <div className="flex gap-5  items-center justify-center ">
                            <h1 className="lg:mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">{name}</h1>
                            
                            <button onClick={() => handleBookmark()} className="bg-[#00cc66] my-5  text-white text-xl  btn hover:bg-[#4a90e2] border-none "><FaRegBookmark /></button>

                        </div>

                        <div className="flex-col">
                            <h1 className="text-red-600  text-xl font-semibold">Personal information :</h1>
                            <p className=" text-lg leading-relaxed text-left  pt-4">Profession:  <span className="text-red-600 font-semibold"> {occupation}</span></p>
                            <p className=" text-lg leading-relaxed text-left  pt-3">Age:  <span className="text-red-600 font-semibold"> {age}</span></p>

                            <p className=" text-lg leading-relaxed text-left pt-3 ">Date of Birth:  <span className="text-red-600 font-semibold"> {dateOfBirth} </span></p>

                            <p className=" text-lg leading-relaxed text-left pt-3 ">Height:  <span className="text-red-600 font-semibold"> {height} feet</span></p>
                            <p className=" text-lg leading-relaxed text-left pt-3 ">Weight:  <span className="text-red-600 font-semibold"> {weight} kg</span></p>


                        </div>
                        <div className="flex-col">
                            <h1 className="text-red-600  text-xl font-semibold mt-10">Family information :</h1>
                            <p className=" text-lg leading-relaxed text-left pt-5 ">Father's Name:  <span className="text-red-600 font-semibold"> {fathersName} </span></p>
                            <p className=" text-lg leading-relaxed text-left pt-3 ">Mother's Name:  <span className="text-red-600 font-semibold"> {mothersName} </span></p>
                            <p className=" text-lg leading-relaxed text-left pt-3 ">Present Address:  <span className="text-red-600 font-semibold"> {presentDivision} </span></p>
                            <p className=" text-lg leading-relaxed text-left pt-3 ">Permanent Address:  <span className="text-red-600 font-semibold"> {permanentDivision} </span></p>
                            <p className=" text-lg leading-relaxed text-left pt-3 ">Race:  <span className="text-red-600 font-semibold"> {race} </span></p>


                        </div>


                    </div>
                    <div className="w-[20%]">
                        <h1 className=" my-5 text-2xl font-bold">Related profiles-</h1>
                        {
                            genderData.map(data=> <AddvetiseCard key={data._id} data={data} ></AddvetiseCard>)
                        }
                    
                    </div>
                    
                </div>
                <div className="flex  flex-col lg:flex-row lg:gap-6 ">
                        <div className="mt-0 lg:mt-6 ">
                            <h1 className="text-red-600  text-xl mt-10 font-semibold">Expectations :</h1>
                            <p className=" text-lg leading-relaxed text-left pt-8 ">Expected parter Age:  <span className="text-red-600 font-semibold"> {expectedPartnerAge}yrs </span></p>
                            <p className=" text-lg leading-relaxed text-left pt-3 ">Expected parter Height:  <span className="text-red-600 font-semibold"> {expectedPartnerHeight} ft </span></p>
                            <p className=" text-lg leading-relaxed text-left pt-3 ">Expected parter Weight:  <span className="text-red-600 font-semibold"> {expectedPartnerWeight} kg </span></p>
                        </div>
                        {
                                view?.Role !=='user' ?  <div className="mt-0 lg:mt-6 ">
                         
                                <h1 className="text-red-600  text-xl mt-10 font-semibold">Contacts :</h1>
                                <p className=" text-lg leading-relaxed text-left pt-8 ">Email:  <span className="text-red-600 font-semibold"> {contactEmail} </span></p>
                                <p className=" text-lg leading-relaxed text-left pt-3 ">Phone number:  <span className="text-red-600 font-semibold"> {phoneNumber} </span></p>
                                <h1 className="text-lg leading-relaxed text-left pt-3 "> Premium Membership:<span className="text-red-600 font-semibold"> {premiumMember}</span>
                                </h1>
    
    
                            </div> :  <div className="flex gap-6 justify-center items-center ">
                        <Link to={`/checkout/${_id}`}>   <Butoon heading='Request Contact'></Butoon></Link> </div>
                            }
                      
                       
                      
                   
                       
                    </div>
            </div>
        </section>

    );
};

export default SingleCard;