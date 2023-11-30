import { useLoaderData } from "react-router-dom";


const SingleCard = () => {
//TODO :ADD SOME ICONS TO EACH SECTIONS LIKE CALL EMAIL ICONS
    const data =useLoaderData()
    console.log(data);
    const {biodataType,profileImageLink,permanentDivision,occupation,age,_id,contactEmail,dateOfBirth,expectedPartnerAge,expectedPartnerHeight,expectedPartnerWeight,fathersName,height,mothersName,name,phoneNumber,premiumMember,presentDivision,race,weight}=data
    return (
        <div>
           <section>
  <div className="px-4 py-12 mx-auto max-w-[1600px] sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div className="flex flex-wrap items-center mx-auto max-w-7xl">
      <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>

            <div className="absolute rounded-full bg-red-600 -bottom-24 right-20 w-72 h-[80vh] mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img className="object-cover object-center h-[80vh] mx-auto rounded-lg shadow-2xl" alt="hero" src={profileImageLink}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start md:mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0  ml-5">
        <div className="mb-8  flex justify-between gap-10 items-center font-bold tracking-widest text-red-600 uppercase"> <h1>Biodata-type: {biodataType}</h1>  <h1 className="text-bold"> Premium Membership: {premiumMember}</h1></div>
        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">{name}</h1>
        <div className="flex  justify-between items-center space-x-16 ">
            <div className="flex-col">
                <h1 className="text-red-600  text-xl font-semibold">Personal information :</h1>
        <p className=" text-lg leading-relaxed text-left  pt-8">Profession:  <span className="text-red-600 font-semibold"> {occupation}</span></p>
        <p className=" text-lg leading-relaxed text-left  pt-3">Age:  <span className="text-red-600 font-semibold"> {age}</span></p>
      
        <p className=" text-lg leading-relaxed text-left pt-3 ">Date of Birth:  <span className="text-red-600 font-semibold"> {dateOfBirth} kg</span></p>
       
        <p className=" text-lg leading-relaxed text-left pt-3 ">Height:  <span className="text-red-600 font-semibold"> {height} feet</span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Weight:  <span className="text-red-600 font-semibold"> {weight} kg</span></p>
       
   
        </div>
        <div className="flex-col">
        <h1 className="text-red-600  text-xl font-semibold">Family information :</h1>
        <p className=" text-lg leading-relaxed text-left pt-8 ">Father's Name:  <span className="text-red-600 font-semibold"> {fathersName} </span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Mother's Name:  <span className="text-red-600 font-semibold"> {mothersName} </span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Present Address:  <span className="text-red-600 font-semibold"> {presentDivision} </span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Permanent Address:  <span className="text-red-600 font-semibold"> {permanentDivision} </span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Race:  <span className="text-red-600 font-semibold"> {race} </span></p>
    
        </div>
        </div>
        <div className="flex gap-6 ">
        <div className="mt-0 lg:mt-6 ">
        <h1 className="text-red-600  text-xl mt-10 font-semibold">Expectations :</h1>
        <p className=" text-lg leading-relaxed text-left pt-8 ">Expected parter Age:  <span className="text-red-600 font-semibold"> {expectedPartnerAge}yrs </span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Expected parter Height:  <span className="text-red-600 font-semibold"> {expectedPartnerHeight} ft </span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Expected parter Weight:  <span className="text-red-600 font-semibold"> {expectedPartnerWeight} kg </span></p>
        </div>
        <div className="mt-0 lg:mt-6 ">
        <h1 className="text-red-600  text-xl mt-10 font-semibold">Contacts :</h1>
        <p className=" text-lg leading-relaxed text-left pt-8 ">Email:  <span className="text-red-600 font-semibold"> {contactEmail} </span></p>
        <p className=" text-lg leading-relaxed text-left pt-3 ">Phone number:  <span className="text-red-600 font-semibold"> {phoneNumber} </span></p>
       
        </div>
        </div>
       
      </div>
      
    </div>
  </div>
</section>
        </div>
    );
};

export default SingleCard;