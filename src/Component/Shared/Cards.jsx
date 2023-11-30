import { Link } from "react-router-dom";
import Butoon from "./Butoon";



const Cards = ({item}) => {
 const {biodataType,profileImageLink,permanentDivision,occupation,age,_id}=item

    return (
        <div>
        
        <div className="relative overflow-hidden">
 <div className="w-full h-[40vh] bg-cover  text-white bg-center transition-transform  scale-100 hover:scale-105 hover:bg-[#BE006B] duration-1000">
   <img className=' object-fit' src={profileImageLink} alt="" />
   <div className="absolute inset-0 hover:bg-[#2b031a]  hover:bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 duration-1000">
     <div className="absolute inset-0 p-10 flex flex-col justify-end">
       <h2 className=" text-2xl font-semibold opacity-100">Bio-Data type: {biodataType}</h2>
       <p className=" text-lg">Profession: {occupation}</p>
       <div className="flex items-center justify-between  text-lg mt-2">
         <span>Age:{age}</span>
         <span>Permanent Division: {permanentDivision}</span>

       </div>
       <div className="flex justify-center items-center ">
      <Link to={`/singleCard/${_id}`}> <Butoon heading='View Profile'></Butoon></Link>
       </div>
     </div>
   </div>
 </div>
</div>
   </div>
);

}
export default Cards;