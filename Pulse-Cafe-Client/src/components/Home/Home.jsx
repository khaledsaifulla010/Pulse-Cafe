import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const Home = () => {
    return (
        <div className="px-20 mt-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;