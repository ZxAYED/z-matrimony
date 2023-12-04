import { Link } from "react-router-dom";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddvetiseCard = ({data}) => {
    useEffect(()=>{
        AOS.init();
      },[])
    const { biodataType, profileImageLink, permanentDivision, occupation, age, _id, contactEmail, dateOfBirth, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mothersName, name, phoneNumber, premiumMember, presentDivision, race, weight } = data
    return (


<div data-aos="flip-up" className="w-full overflow-hidden rounded-lg shadow-lg ">
    <div className="py-5 text-center">
    <Link to={`/singleCard/${_id}`}>  <a href="#"  className="block  " >Name : {name}</a></Link>
      
   
    </div>
</div>





        )
























   
};

export default AddvetiseCard;
