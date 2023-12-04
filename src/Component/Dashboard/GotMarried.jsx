


    import { useSpring, animated  } from '@react-spring/web';
import React from 'react';
    import { useForm } from 'react-hook-form';
   import Butoon from './../Shared/Butoon';
import { toast } from 'react-toastify';
import useAxiosSecure from './../Hooks/useAxiosSecure';

    
    const GotMarried = () => {
      const { register, handleSubmit } = useForm();
      const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
      });
      const AxiosSecure=useAxiosSecure()
    
      const onSubmit = (data) => {
     const   coupleImageLink =data.coupleImageLink
     const gender=data.gender
     const marriageDate =data.marriageDate
     const reviewStar=data.reviewStar
     const successStoryText=data.successStoryText
     const item={
      coupleImageLink,gender,marriageDate,reviewStar,successStoryText,
     }
    
     AxiosSecure.post('/reviews',item)
     .then(res=>{
         if(res){
             console.log(res);
         toast.success('Review has been added SuccessFully!', {
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
      };
    
      return (
        <animated.div style={fadeIn} className="p-4">
          <h1 className="text-3xl font-bold mb-4">Share Your Success Story</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex  items-center gap-4'>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                {...register('gender')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="marriageDate" className="block text-gray-700">
              Marriage Date
              </label>
              <input
                type="date"
                id="gender"
                {...register('marriageDate')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="story" className="block text-gray-700">
              Review Rate out of 5
              </label>
              <input
                type="number"
                id="story"
                {...register('reviewStar',{maxLength:1})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="coupleImageLink" className="block text-gray-700">
                Couple Image Link
              </label>
              <input
                type="text"
                id="coupleImageLink"
                {...register('coupleImageLink')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="successStoryText" className="block text-gray-700">
                Success Story Review
              </label>
              <textarea
                id="successStoryText"
                {...register('successStoryText')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <a
              type="submit"
              className="bg-indigo-300 text-white  rounded-md hover:bg-indigo-300 focus:outline-none"
            >
             <Butoon heading={"Submit"}></Butoon>
            </a>
          </form>
        </animated.div>
      );
    };
    

    

export default GotMarried;