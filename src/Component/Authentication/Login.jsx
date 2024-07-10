import { useForm } from 'react-hook-form';
import img from '../../assets/login.gif'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate=useNavigate()
    const location =useLocation()
    const from =location.state?.from?.pathname || '/'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { handleSignIn,
        handleGoogle}=useContext(AuthContext)
  const onSubmit = data => {
    const email =data.email
    const password =data.password
    handleSignIn(email,password)
    .then(res=>{toast.success(`Logged in successFully`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
      navigate(from,{replace:true})

    })
    .catch(err=>{
        toast.error(`${err}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    })
   
    
    
}
const google=()=>{
    handleGoogle()
    .then(res=>{console.log(res)
        toast.success(`Logged in successFully`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
            navigate('/');})
    
}


    return (
        <div>
            <section>
  <div className=" mx-auto max-w-7xl flex  flex-col-reverse lg:flex-row-reverse justify-center items-center sm:px-6 md:px-12 lg:px-24 ">

        <div>

        <section>
    <div className="flex min- overflow-hidden">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
                <div>
               
                    <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Sign in.</h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label  className="block text-sm font-medium text-neutral-600"> Email address </label>
                                <div className="mt-1">
                                    <input {...register("email")} name="email" type="email" required="" placeholder="Your Email" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-neutral-600"> Password </label>
                                <div className="mt-1">
                                    <input {...register("password")} type="password"  required="" placeholder="Your Password" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                                    <label  className="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-[#4a90e2] hover:text-blue-500"> Forgot your password? </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-semibold text-center text-white transition duration-500 ease-in-out transform bg-[#ff3366] rounded-xl hover:bg-[#4a90e2] focus:outline-none focus:ring-2 focus:ring-offset-2  ">Sign in</button>
                            </div>
                        </form>
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-neutral-600"> Or continue with </span>
                            </div>
                        </div>
                        <div>
                            <button onClick={google} className="w-full items-center block px-10 py-3.5 text-base font-medium bg-[#ff3366]  text-center  text-white transition duration-500 ease-in-out transform  shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <div className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                        <defs>
                                            <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                                        </defs>
                                        <clipPath id="b">
                                            <use xlink:href="#a" overflow="visible"></use>
                                        </clipPath>
                                        <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                                        <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                        <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                        <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                                    </svg>
                                    <span className="ml-4 font-semibold"> Log in with Google</span>
                                </div>
                            </button>
                        </div>
                        <Link to='/Register'><p className='mt-6 text-center '>New to <span className='text-[#ff3366] font-semibold '>TaqWaMate</span>? Click here to  <span className='text-[#4a90e2] font-semibold'>Register</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex-1 hidden  w-0 overflow-hidden lg:block">
            <img className="absolute inset-0 object-cover w-full h-full" src="/assets/images/placeholders/rectangleWide.png" alt=""/>
        </div>
    </div>
</section>



        </div>
        <div className="w-full bg-[#ff3366] rounded-2xl mt-10 lg:mt-0  px-6 py-3">
        <h1 className="text-3xl text-white text-center my-6 font-bold">Welcome Back ! </h1>          
          <img className="object-cover h-full  bg-cover rounded-l-lg" src={img} alt=""/>
          <div>
            <h1 className='py-4 text-gray-200 font-lg text-center'>
                Admin Gmail : mama@mami.com Password: Tiberium22$
            </h1>
          </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Login;