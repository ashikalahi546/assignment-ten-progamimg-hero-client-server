import { useContext, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { IoMdCheckmark } from "react-icons/io";


const Login = () => {
  const [showPassword, setShowPassword] = useState("");
  
  const [emailError,setEmailError] = useState('');
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('')
  const {loginUser} = useContext(AuthContext)
  const handleLogin = e =>{
    e.preventDefault()
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    if(!/@gmail\.com$/.test(email)){
      setEmailError('Email must be end with @gmail.com');
      return;
    }
    if(!/(?=.*[A-Z])/.test(password)){
      setError('Must have an Uppercase letter in the password');
      return;
    }
    if(!/(?=.*?[a-z])/.test(password)){
      setError('Must have an lowercase letter in the password');
      return
    }
    
    setEmailError('')
    setError('')
    setSuccess('')
    loginUser(email,password)
    .then(result => {
      console.log(result.user)
      setSuccess('User logged Successfully')
    })
    .catch(err =>{
      setError(err.message)
    })
  }


  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full">
        <div className="card shrink-0 xl:w-4/12 lg:w-5/12  sm:w-8/12 w-full  shadow-2xl bg-base-100">
          <h1 className="lg:text-4xl text-2xl font-medium text-center pt-5">Login</h1>
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-contro ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered w-full"
                required
              />
              <div>
                {
                  emailError && <p>{emailError}</p>
                }
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="w-full input input-bordered"
                  required
                />
                <span
                  className="absolute top-4 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
                <div className="text-red-500 font-medium text-center py-2">
                  {
                    error && <p>{error}</p>
                  }
                </div>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="pb-6 mx-10">
            <p className="text-center font-medium">
              Dont’t Have An Account ?{" "}
              <Link className="text-pink-500" to="/register">
                Register
              </Link>{" "}
            </p>
            <div className="my-5">
              <div className="flex items-center gap-3 ">
                <div className="w-full border-t-2 border-gray-100"></div>
                <p className="font-medium">OR</p>
                <div className="w-full border-t-2 border-gray-100"></div>
              </div>
            </div>

            <div>
              <div className="border p-2.5 rounded flex items-center gap-2 justify-center">
                <GrGoogle />
                <p className="font-medium">Login with Google</p>
              </div>
              <div className="border p-2.5 rounded flex items-center gap-2 justify-center mt-3">
                <BsTwitter />
                <p className="font-medium">Login with Twitter</p>
              </div>
            </div>
            <div className="font-medium  text-green-500 mt-3  ">
            {
              success && <p className="flex items-center text-center justify-center gap-2">{success}  <IoMdCheckmark /></p>

            }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
