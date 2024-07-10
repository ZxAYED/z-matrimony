import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import website from '../../assets/ABout.json'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';

const About = () => {
  const { register, handleSubmit, reset } = useForm();
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    reset();
  }
  return (
    <div
  className="hero min-h-screen -mb-28 md:mx-auto text-white"
  style={{
    backgroundImage: "url(https://vasavimatrimony.org/images/slider-banner-1.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content ">
  <animated.div style={fadeIn} className="max-w-7xl mx-auto p-8 ">
      <h1 className="text-5xl  text-center font-bold mb-4 text-[#ff3366]">About Us</h1>
      <p className="text-lg mb-4 text-center">
        Welcome to our matrimonial platform! Our website is designed to help you find the perfect life partner with ease. We provide a clean, intuitive, and engaging interface that sets us apart from other platforms. Unlike other websites, we ensure a clutter-free experience without intrusive ads or overwhelming data.
      </p>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mt-10'>
        <section>
        <h2 className="text-3xl  font-bold mb-2 text-[#ff3366] py-2">Why Choose Our Matrimonial Platform?</h2>
      <ul className="list-disc  list-inside mb-4">
        <li>Eye-catching Design: A visually appealing website that keeps you engaged.</li>
        <li>User-friendly Interface: Easy to navigate, making your search hassle-free.</li>
        <li>Privacy and Security: Your data is safe with us, giving you peace of mind.</li>
      </ul>
    
     <h2 className="text-3xl  font-bold mb-2 text-[#ff3366] pt-4 pb-2">Solving Real-World Matrimonial Challenges</h2>
      <p className="mb-4 ">
        In a world full of choices, finding the right partner can be daunting. Our website addresses this challenge by offering a streamlined and effective platform. It's better than other websites because it's clean, free from excessive ads, and focuses on providing the best user experience.
      </p>
      <ul className="list-disc list-inside mb-4 " >
        <li>Focused Search: Efficient matching algorithms to find compatible partners.</li>
        <li>Ad-Free Experience: Enjoy a clean, distraction-free environment.</li>
        <li>Data Privacy: No sharing of your personal information without consent.</li>
      </ul>
     </section>
     
      <Lottie className='max-w-xl mx-auto -mt-10 -mb-10 md:-mt-28 md:-mb-32' animationData={website} loop={true} />
      </div>
      <animated.div style={fadeIn} className="max-w-7xl mx-auto mt-10 p-8">
      <h1 className="text-5xl font-bold mb-4 text-[#ff3366]">Contact Us</h1>
      <p className="text-lg mb-4">We would love to hear from you! Please fill out the form below to get in touch with us.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            {...register('name')}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            {...register('email')}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            name="message"
            {...register('message')}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff3366] peer"
            placeholder=" "
            required
          ></textarea>
          <label className="peer-focus:font-medium absolute text-sm text-[#ff3366] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3366] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Message
          </label>
        </div>
        <button type="submit" className="bg-[#ff3366]  text-white px-4 py-2 rounded-md hover:bg-[#bd2148] focus:outline-none">
          Send Message
        </button>
      </form>
    </animated.div>
    </animated.div>
  </div>
</div>
   
  );
  }

export default About;
