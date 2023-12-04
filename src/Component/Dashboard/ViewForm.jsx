import { ToastContainer, toast } from "react-toastify";
import Butoon from "../Shared/Butoon";
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import useAxiosSecure from "../Hooks/useAxiosSecure";





const ViewForm = ({ data,refetch }) => {
    const { user } = useContext(AuthContext)
console.log(data);
    const AxiosSecure = useAxiosSecure()

    const { fathersName, race, age, occupation, dateOfBirth, weight, height, profileImageLink, name, biodataType,
        mothersName,
        _id,
        permanentDivision,
        presentDivision,
        expectedPartnerAge,
        expectedPartnerHeight,
        expectedPartnerWeight,
        phoneNumber,
        contactEmail,
        biodataId, Role,status } = data || {}
    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target
        const biodataType2 = form.biodatatype.value ||biodataType
        const name2 = form.name.value || name
        const profileImageLink2 = form.image.value ||profileImageLink
        const height2 = form.height.value || height
        const dateOfBirth2 = form.date.value ||dateOfBirth
        const weight2 = form.weight.value ||weight
        const age2 = form.age.value || age
        const occupation2 = form.profession.value || occupation
        const race2 = form.race.value || race
        const fathersName2 = form.Father.value ||fathersName
        const mothersName2 = form.Mothers.value || mothersName
        const permanentDivision2 = form.Permanent.value || permanentDivision
        const presentDivision2 = form.Present.value || presentDivision
        const expectedPartnerAge2 = form.ExpectedPartnerAge.value || expectedPartnerAge
        const expectedPartnerHeight2 = form.ExpectedPartnerHeight.value ||expectedPartnerHeight
        const expectedPartnerWeight2 = form.ExpectedPartnerWeight.value ||expectedPartnerWeight
        const phoneNumber2 = form.Mobile.value || phoneNumber
        const contactEmail2 = user.email

        const status = 'pending'
        const items = {
            fathersName2, race2, age2, occupation2, dateOfBirth2, weight2, height2, profileImageLink2, name2, biodataType2, status,
            mothersName2,
            permanentDivision2,
            presentDivision2,
            expectedPartnerAge2,
            expectedPartnerHeight2,
            expectedPartnerWeight2,
            phoneNumber2,
            contactEmail2,
            biodataId, Role
        }


        AxiosSecure.put(`/cards/${_id}`, items)
            .then(res => {
             
                    console.log(res.data);
                    if(res.data.modifiedCount > 0){
                        refetch()
                        toast.success(`${contactEmail}'s Bio-Data has updated SuccessFully!`, {
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
            .catch(err => {
                if (err) {
                    toast.error(err.message, {
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
    }
    const HandlePremium=UserEmail=>{
        const info={
            UserEmail,Role,status ,UserName :name||'No Biodata Found',biodataId:biodataId ||'No Biodata Found'
        }
       AxiosSecure.post('/premiumReq',info)
       .then(res=>{
        if(res.data.insertedId){
            refetch()
            toast.success(`Request sent ! `, {
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
    }
    return (
        <div>
        <form className='px-16 ' onSubmit={handleUpdate} >
            <div className="">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="biodatatype" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                    <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Bio Data Type :{biodataType} </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                    <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Name : {name}</label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"> Profile Image Link :{profileImageLink} </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="height" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Height(in feet) :{height}</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"> Weight (kg) : {weight}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Age : {age}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="profession" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Profession : {occupation}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="race" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Race (asian/african/arab/uk/us/..): {race} </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Date of Birth: {dateOfBirth}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Father" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Fathers name : {fathersName}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Mothers" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Mothers Name : {mothersName}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Permanent" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Permanent Division : {permanentDivision}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Present" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Present Division: {presentDivision} </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="ExpectedPartnerAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"> Expected Partner Age : {expectedPartnerAge} years</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="ExpectedPartnerHeight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Expected Partner Height : {expectedPartnerHeight} feet</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="ExpectedPartnerWeight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Expected Partner Weight : {expectedPartnerWeight}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Mobile" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Mobile Number : {phoneNumber}</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="biodataId" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 disabled dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Bio-data Id :   {biodataId}  </label>

                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-center mt-10  mb-4 mx-auto items-center gap-4">
                <button type="submit"  className='block btn mx-auto'>Submit</button>
             
            </div>

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
    {
        data?.Role==='user' ?      <button className="flex flex-col justify-center mb-20  mx-auto items-center gap-4" onClick={()=>HandlePremium(user.email)}> <Butoon heading={"Request Premium"}></Butoon></button>:''
    }
          </div>

    );
};

export default ViewForm;