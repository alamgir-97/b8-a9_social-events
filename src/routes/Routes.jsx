import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Requirements from './../Pages/Requirements/Requirements';
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import SignOut from "../Pages/Authentication/SignOut/SignOut";

const  Routes  = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
    },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
    },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
    },
      {
        path: "/signOut",
        element: <SignOut></SignOut>,
    },
      {
        path: "/requirements",
        element: <Requirements></Requirements>,
    },
      
  
  
  
  ]
  },
]);

export default Routes;