import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";






const SignUp = () => {
  const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate();
  
  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        console.log('user profile info updated')
        reset();
      })
      console.log(loggedUser);
      Swal.fire({
        title: "Sign Up is Successfull",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });    
      navigate('/')
      
    })
    .catch(error => console.log(error))
    
  }

  console.log(watch("name"))
  return (
    <>
       <Helmet>                
                <title>Auth-Project | Sign Up</title>              
            </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-9/12">
          <div className="text-left">
            <h1 className="text-3xl font-bold">Sign Up</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"                  
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photoURL"
                  placeholder="photoURL"
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  className="input input-bordered"                  
                />
                {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password" , { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })}
                  placeholder="password"
                  className="input input-bordered"                
                />
                 {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>)}
                 {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be between 6 and 20 characters</p>)}
                 {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password must be between 6 and 20 characters</p>)}
                 {errors.password?.type === "pattern" && (
                <p className="text-red-600">Must have one uppercase and one special character</p>)}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword")}
                  name="confirmPassword"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign Up"
                ></input>
              </div>
            </form>
           
            <div className="">
              <p className="px-8 mb-6">
                Already have an account?{" "}
                <Link to="/SignIn" className="text-blue-700 font-bold">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;