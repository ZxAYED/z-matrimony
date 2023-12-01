import { Link } from "react-router-dom";
import Butoon from "../Shared/Butoon";


const AddvetiseCard = ({data}) => {
    const { biodataType, profileImageLink, permanentDivision, occupation, age, _id, contactEmail, dateOfBirth, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, fathersName, height, mothersName, name, phoneNumber, premiumMember, presentDivision, race, weight } = data
    return (


<div className="w-full overflow-hidden rounded-lg shadow-lg ">
    <div className="py-5 text-center">
    <Link to={`/singleCard/${_id}`}>  <a href="#"  className="block  " >Name : {name}</a></Link>
      
   
    </div>
</div>





        )
























   
};

export default AddvetiseCard;
