import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutForm = () => {
    const data = useLoaderData();
  const {
    biodataType,
    profileImageLink,
    biodataId,
    permanentDivision,
    occupation,
    age,
    _id,
    contactEmail,
    dateOfBirth,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    fathersName,
    height,
    mothersName,
    name,
    phoneNumber,
    premiumMember,
    presentDivision,
    race,
    weight,
  } = data;
  const { user } = useContext(AuthContext);
  const email = user.email || "";
  const UserName = user.displayName || "";
  const axiosSecure = useAxiosSecure();
const stripe = useStripe();
const elements = useElements();
const handleSubmit = async (event) => {
  
  event.preventDefault();

  if (!stripe || !elements) {
   
    return;
  }
  const card = elements.getElement(CardElement);

  if (card == null) {
    return;
  }
  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card,
  });

  if (error) {
   toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      console.log('[error]', error)
    
  } else {
    console.log('[PaymentMethod]', paymentMethod);

    const userInfo = {
      biodataType,
      profileImageLink,
      biodataId,
      permanentDivision,
      occupation,
      age,
      id: _id,
      contactEmail,
      dateOfBirth,
      expectedPartnerAge,
      expectedPartnerHeight,
      expectedPartnerWeight,
      fathersName,
      height,
      mothersName,
      name,
      phoneNumber,
      premiumMember,
      presentDivision,
      race,
      weight,
      UserEmail: email,
      status: "pending",
      UserName,
    };
  
    axiosSecure
    .post("/requested", userInfo)
    .then((res) => {
      if (res.data.insertedId) {
        toast.success(`Request Succesfull`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
    .catch((err) => {
      toast.error(err, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }


 

  
  // error show kortesena duibar press korle
};


    return (
        <div>
        <section className="pt-20 ">
  
         
            <form onSubmit={handleSubmit} className="container max-w-2xl mx-auto  shadow-md md:w-3/4">
              <div className="p-4 border-t-2 rounded-xl bg-gray-100/5 ">
                <div className="max-w-sm mx-auto md:w-full md:mx-0">
                  <div className="inline-flex items-center space-x-4">
                    <a href="#" className="relative block">
                      <img
                        alt="user profile"
                        src={user.photoURL}
                        className="mx-auto object-cover rounded-full h-16 w-16 "
                      />
                    </a>
                    <h1 className="">{user.displayName}</h1>
                  </div>
                </div>
              </div>
              <div className="space-y-6 bg-white">
                <div className="items-center w-full p-4 space-y-4 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Bio-data id:</h2>
                  <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                      <input
                      disabled
                        type="text"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 disabled focus:ring-purple-600 focus:border-transparent"
                        placeholder={`BioData ID : ${biodataId}`}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="items-center w-full p-4 space-y-4  md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">User Email :</h2>
                  <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div className=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          disabled
                          placeholder={email}
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative ">
                        <input
                          type="text"
                          id="user-info-phone"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Self Id No:"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="items-center w-full p-8 space-y-4  ">
                  <h2 className="">
                    Stripe Card Number : <span className="text-sm text-right text-gray-500"> (You can use 42424242424242424242 for all input (date should be in future) fields for testing purpose)</span>
                  </h2>
                  <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                    
                  </div>
                  <div className="text-center ">
                  <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="py-2 px-4 w-fit bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " type="submit" disabled={!stripe}
                      >Checkout</button>
    
    
                    
                  </div>
                </div>
                <hr />
                <div className="w-full px-4 pb-4   ">
                  <p className="text-xl font-semibold text-red-500">
                   
                    You have to pay 500 tk to see the contact information and have
                    to wait untill admin's apporval
                  </p>
                </div>
              </div>
            </form>
      
        </section>
      </div>
    );
};

export default CheckoutForm;