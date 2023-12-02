import React, { useState } from 'react';
import useAxiosSecure from './../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headings from './Headings';
import Butoon from '../Shared/Butoon';
const ViewBiodata = () => {
    const AxiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const [data,setData]=useState()
    const email =user.email
    AxiosSecure.get(`/cards/user?email=${user?.email}`)
    .then(res=>{console.log(res.data);})



    const handleUpdate =e=>{
        e.preventDefault()
        const form = e.target
        const biodataType =form.biodatatype.value;
        const name =form.name.value;
        const profileImageLink=form.image.value;
        const height=form.height.value;
        const dateOfBirth=form.date.value;
        const weight=form.weight.value;
        const age=form.age.value;
        const occupation=form.profession.value;
        const race=form.race.value;
        const fathersName=form.Father.value;
        const mothersName=form.Mothers.value;
        const permanentDivision=form.Permanent.value;
        const presentDivision=form.Present.value;
        const expectedPartnerAge=form.ExpectedPartnerAge.value;
        const expectedPartnerHeight=form.ExpectedPartnerHeight.value;
        const expectedPartnerWeight=form.ExpectedPartnerWeight.value;
        const phoneNumber=form.Mobile.value;
        const contactEmail=user.email
        const premiumMember ="no"
        const status ='available'
   const data={   fathersName,race,age,occupation,dateOfBirth,weight,height,profileImageLink,name,biodataType,status,
        mothersName,
        permanentDivision,
        presentDivision,
        expectedPartnerAge,
        expectedPartnerHeight,
        expectedPartnerWeight,
        phoneNumber,
        contactEmail,
        premiumMember}


     AxiosSecure.patch('/cards',data)
        .then(res=>{
            if(res){
                console.log(res);
            toast.success('BioData  Added SuccessFully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })}
        })
        .catch(err=>{
            if(err){
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })}
        })
    }
    return (
        <div  >
      <Headings heading="View & Edit Your Biodata" subheading={"Take control of your profile information. In this section, you can easily upload or edit your biodata to ensure that your profile reflects your true self. Whether you have new details to add or want to update existing information, managing your biodata is simple and straightforward. Your profile is a key part of your journey, and keeping it up-to-date ensures that you make meaningful connections on your path to finding a life partner"}></Headings>
        <div className='text-black  rounded-2xl'>
              
  <form className='px-16 ' onSubmit={handleUpdate} > 
     
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="biodatatype"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bio Data Type  </label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="name" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name :</label>
    </div>
  
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Profile Image Link :</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="number" name="height" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height(in feet) :</label>
      </div>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-6 group">
          <input type="number" name="weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Weight (kg) :</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="number" name="age"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age :</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="profession"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profession :</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="race"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Race (asian/african/arab/uk/us/..):</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="date"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of Birth:</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="Father"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fathers name</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="Mothers"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mothers Name :</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="Permanent"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Permanent Division  :</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="Present"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Present Division:</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="ExpectedPartnerAge"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Expected Partner Age</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="ExpectedPartnerHeight"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expected Partner Height</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="ExpectedPartnerWeight"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expected Partner Weight</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="Mobile"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number :</label>
      </div>
     
    </div>
    <span type="submit" className='block mx-auto'><Butoon  heading={"Submit"}></Butoon></span>
  
    <ToastContainer
                      position="top-right"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
  </form>
  
          </div> 
          </div>
    );
};

export default ViewBiodata;