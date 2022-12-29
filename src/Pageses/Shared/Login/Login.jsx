import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';


const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const [loginError, setLoginError] = useState("");
      const location = useLocation();
      const navigate = useNavigate();
    //   const [loginUserEmail, setLoginUserEmail] = useState("");
    
    
      const from = location.state?.from?.pathname || '/';
  const {signIn,signInWithGoogle,signInWithGitHub} = useContext(AuthContext);

      const handleLogIn=(data)=>{
        setLoginError("")
        signIn(data.email, data.password)
            .then(result =>{
                const user = result.user ;
                console.log(user);
                toast("Thank You Welcome back. Login Successfull ")
                navigate(from , {replace: true})
                    // setLoginUserEmail(data.email)
            })
            .catch(err => {
                console.error(err)
                setLoginError(err.message);
            })
      }
    
      //Google signIn
      const handleGoogleSignIn = ()=>{
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast("Log In Successfull");
            })
      }
    
      const handleGitHubSignIn =()=>{
        signInWithGitHub()
            .then(result =>{
                console.log(result.user);
                toast("Log In Successfull");
            })
      }
    return (
        <div className="lg:flex justify-center items-center    p-10">
        <div
          className="hero w-[450px] h-[600px] bg-cover"
          style={{
            backgroundImage: `url("https://onlineprofilepros.com/wp-content/uploads/2019/10/linkedin-login.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-30"></div>
          <h1 className="z-10 pt-36 -ml-24 text-2xl font-semibold text-white ">
            Spend your Time <br /> here guys{" "}
          </h1>
          <p className=" -ml-36 pt-64 text-sm font-thin text-white ">
            And share your creativity <br /> Let's go for share{" "}
          </p>
        </div>
        <div className="px-5 w-[450px] -ml-24 text-center bg-slate-100 z-20 py-20  bg-blend-screen">
          <h1 className="text-2xl  font-bold">Welcome to your</h1>
          <div className=" float-right my-2 w-24  font-thin">
            <p className="text-center p-1  text-sm rounded-md sm:w-auto focus:outline-none  dark:text-gray-100 dark:bg-gray-900">
              {" "}
              -media place
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleLogIn)}
            noValidate=""
            action=""
            className="ng-untouched ng-pristine ng-valid"
          >
            <div className="relative pb-2 mt-5">
              <label
                className="block w-full appearance-none text-left py-2 text-gray-700 mr-6"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="text"
                name="email"
                {...register("email", {
                    required: "Please Enter a valid Email",
                  })}
                className="block w-full appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-6"
                placeholder="Email"
              />
               {errors.email && (
                <div className="alert alert-error mt-1 py-2 block shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{errors.email?.message}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="relative py-2">
              <label
                className="block w-full appearance-none text-left py-2 text-gray-700 mr-6"
                htmlFor="email"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                {...register(
                    "password",
  
                    {
                      required: "Please Enter your password",
                      minLength: {
                        value: 6,
                        message: "Password is wrong",
                      },
                      maxLength: {
                        value: 12,
                        message: "Password doesn't match",
                      },
                    }
                  )}
                className="block w-full appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-6"
                placeholder="Password"
              />
                            {errors.password && (
                <div className="alert alert-error mt-1 py-2 block shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{errors.password?.message}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="text-left">
              <p>
                Don't have any account?{" "}
                <Link className="text-green-400 font-bold" to="/signup">
                  Sign UP
                </Link>
              </p>
            </div>
            <div className="flex justify-center items-center text-2xl pt-4">
              <FaGoogle onClick={handleGoogleSignIn} className="mr-2" />
              <FaGithub onClick={handleGitHubSignIn}  className="mr-2 " />
              <FaFacebook className="" />
            </div>
            <div className="relative">
              <button className="block w-full appearance-none  bg-black border text-white border-gray-200  font-semibold  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5">
                LOGIN
              </button>
            </div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </form>
        </div>
      </div>
    );
};

export default Login;