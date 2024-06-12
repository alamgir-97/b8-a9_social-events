import { Outlet } from "react-router";
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";


const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-100px)]">
            <Outlet></Outlet>
            </div>            
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;