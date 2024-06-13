import { useState } from "react";
import { NavLink } from "react-router-dom";


const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleOnClick = () =>{

    }
    return (
        <><div className="relative">
             <div className="flex flex-row items-center gap-3 broder-[1px] rounded-md">
           <div className="hidden md:block">
            <bitton className="disabled:cursor-not-allowed cursor-poninter hover:bg-neutral-100 py-3 px-4 text-sm font-semibold">Host your name</bitton>
           </div>
           <div onClick={()=>setIsOpen(!isOpen)} className="p-4 md:py-1 px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full ">
            <NavLink to="/signIn" className=''>Logo</NavLink>
            <NavLink to="/signIn" className=''>photo</NavLink>

           </div>
             </div>
             {isOpen &&(
           <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">  
                <div className="flex flex-col gap-2">
                <NavLink to="/signIn" className='btn btn-ghost'>sign In</NavLink>
                <NavLink to="/signUp" className='btn btn-ghost'>sign Up</NavLink>
                <NavLink to="/signOut" className='btn btn-ghost'>sign Out</NavLink>
                </div>
                </div>)}
           </div>
        </>
    );
};

export default MenuDropdown;