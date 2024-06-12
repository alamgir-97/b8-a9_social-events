import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Requirements from './../Pages/Requirements/Requirements';



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
        path: "/requirements",
        element: <Requirements></Requirements>,
    },
      
  
  
  
  ]
  },
]);

export default Routes;