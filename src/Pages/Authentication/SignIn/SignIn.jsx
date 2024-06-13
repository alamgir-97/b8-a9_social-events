import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";




const SignIn = () => {
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  
  const handleSignIn = event =>{       
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email, password)
    .then (result => {
      const user = result.user;
      console.log(user)
      Swal.fire({
        title: "User LogIn Successfull",
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
      navigate(from, {replace:true});
    })
  }
  
 
  
    return (
        <>
        <Helmet>                
                <title>Auth-Project | Sign In</title>              
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  w-9/12">
    <div className="text-left">
      <h1 className="text-3xl font-bold">Sign In</h1>      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
    
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Sign In"></input>
        </div>
      </form>
      <SocialLogin></SocialLogin>
        <div className="">
          <p className="px-8 mb-6">New to here? <Link to='/SignUp' className="text-blue-700 font-bold">Sign Up</Link></p>
        </div>
    </div>
  </div>
</div>
        </>
    );
};

export default SignIn;