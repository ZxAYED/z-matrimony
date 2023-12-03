


    import { useSpring, animated  } from '@react-spring/web';
import React from 'react';
    import { useForm } from 'react-hook-form';
   
    
    const GotMarried = () => {
      const { register, handleSubmit } = useForm();
      const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
      });
    
      const onSubmit = (data) => {
        // Assuming you have a function to send data to the success story database
        // You can implement the logic to send the data to your backend or database here
        console.log(data);
        // Reset the form after submission
   
      };
    
      return (
        <animated.div style={fadeIn} className="p-4">
          <h1 className="text-3xl font-bold mb-4">Share Your Success Story</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <label htmlFor="partnerBiodataNumber" className="block text-gray-700">
                Partner Biodata Number
              </label>
              <input
                type="text"
                id="partnerBiodataNumber"
                {...register('partnerBiodataNumber')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="coupleImage" className="block text-gray-700">
                Couple Image Link
              </label>
              <input
                type="text"
                id="coupleImage"
                {...register('coupleImage')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="successStoryReview" className="block text-gray-700">
                Success Story Review
              </label>
              <textarea
                id="successStoryReview"
                {...register('successStoryReview')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </animated.div>
      );
    };
    

    

export default GotMarried;