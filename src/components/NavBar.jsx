import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <div className="border-b-1 shadow-md py-4 fixed w-full z-10 flex justify-center items-center bg-white">
           <NavLink to="/" className='btn btn-ghost'>Home</NavLink>
           <NavLink to="/requirements" className='btn btn-ghost'>Requirements</NavLink>
            </div>
        </>
    );
};

export default NavBar;