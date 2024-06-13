import { Link, NavLink } from "react-router-dom";
import Container from "../sharedComponents/Container";
import MenuDropdown from "./MenuDropdown";


const NavBar = () => {
    return (
        <>
   
            <div className="fixed w-full z-10 border-b-1 shadow-md bg-white">
            <Container>
            <div className="flex flex-row justify-between items-center gap-3 md:gap-1">
            <div className="py-4">
                <Link to="/" className="hidden md:block">Social-Events</Link>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 md:gap-1">
                <NavLink to="/" className='btn btn-ghost'>Home</NavLink>
                <NavLink to="/requirements" className='btn btn-ghost'>Requirements</NavLink>
              
                <MenuDropdown></MenuDropdown>
           </div>
           </div>
           </Container>
            </div>
            
        </>
    );
};

export default NavBar;