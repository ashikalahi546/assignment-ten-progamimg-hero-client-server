import React, { useContext, useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { IoMdCheckmark } from "react-icons/io";

const Register = () => {
  const [showPassword, setShowPassword] = useState("");
const {register} = useContext(AuthContext)
const [emailError,setEmailError] = useState('');
const [error,setError] = useState('');
const [success,setSuccess] = useState('')
  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password)

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
    register(email,password)
    .then(result => {
      console.log(result.user)
      setSuccess('User Created Successfully')
    })
    .catch(error => {
     setError(error.message)
    })

  }
  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full">
        <div className="card shrink-0 sm:w-4/12 w-full  shadow-2xl bg-base-100">
          <h1 className="lg:text-4xl text-2xl font-medium text-center pt-5">Register</h1>
          <form onSubmit={handleRegister} className="card-body ">
            <div className="form-contro ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-contro ">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="photo"
                placeholder="photo"
                name="photo"
                className="input input-bordered w-full"
                required
              />
            </div>
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
              <span className="text-red-500">
                {
                  emailError && <p>{emailError}</p>
                }
              </span>
            </div>
      

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute top-4 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              </div>
              <div className="pt-3 text-red-500 font-medium text-center">
            {
              error && <p>{error}</p>
            }
          </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="pb-4 ">
            <p className="text-center font-medium">
              Dont’t Have An Account ?
               <Link className="text-pink-500 ml-1" to="/login">
                Login
              </Link>
            </p>
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

export default Register;
