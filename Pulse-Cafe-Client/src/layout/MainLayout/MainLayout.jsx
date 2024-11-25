import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="px-20 mt-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
