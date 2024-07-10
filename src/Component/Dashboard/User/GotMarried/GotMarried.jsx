

import './GotMarried.css'

    import { useSpring, animated  } from '@react-spring/web';
import React from 'react';
    import { useForm } from 'react-hook-form';
   import Butoon from '../../../Shared/Butoon';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Headings from '../../Headings';

    
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
     let reviewStar=data.reviewStar
     if(reviewStar > 5){
      return    reviewStar = 5 
     }
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
        <Headings heading="Share Your Success Story" subheading={"We believe that every love story is special and deserves to be celebrated. Share your unique journey of finding love through our matrimonial platform and inspire others. By submitting your success story, you'll be featured in our homepage review section, showcasing the joy and happiness you've found. Whether it's a heartwarming tale of perseverance or a story of love at first sight, we want to hear from you. Your experience not only highlights the effectiveness of our platform but also encourages others in their search for a life partner. So, take a moment to share your happiness and let your love story be an inspiration to many."}></Headings>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-center max-w-xl mx-10 md:mx-auto items-center gap-4'>
            <div className="relative z-0 w-full mb-6 group">
            <input 
              type="text" 
              name="gender" 
              {...register('gender')}
              className="block py-2.5 px-0 w-full text-sm text-[#ff3366] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer" 
              placeholder=" " 
              required 
            />
            <label 
              className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Gender
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
         <input 
    type="date"
    {...register('marriageDate')}
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer placeholderZ" 
    placeholder=" "
    required 
    onFocus={(e) => e.target.classList.add('focus-style')}
    onBlur={(e) => e.target.classList.remove('focus-style')}
  />
  <label 
    className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Your Marriage Date
  </label>
          </div>
            
          <div className="relative z-0 w-full mb-6 group">
            <input 
                type="number"
                id="story"
                {...register('reviewStar',{maxLength:1})}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer" 
              placeholder=" " 
              required 
            />
            <label 
              className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Review Star (maximum number 5 please)
            </label>
          </div>
            
          <div className="relative z-0 w-full mb-6 group">
            <input 
               type="text"
               id="coupleImageLink"
               {...register('coupleImageLink')}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer" 
              placeholder=" " 
              required 
            />
            <label 
              className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Couple Image Link
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea 
                 id="successStoryText"
                 {...register('successStoryText')}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer" 
              placeholder=" " 
              required 
            ></textarea>
            <label 
              className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Success Story 
            </label>
          </div>
       
           
            <a
              type="submit"
              className="bg-indigo-300 text-white  rounded-md hover:bg-indigo-300 focus:outline-none"
            >
             <Butoon heading={"Submit"}></Butoon>
            </a>
            </div>
          </form>
        </animated.div>
      );
    };
    

    

export default GotMarried;