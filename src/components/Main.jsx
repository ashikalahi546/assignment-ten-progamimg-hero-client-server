import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="lg:container mx-auto">
        <Navber></Navber>
  
        <Outlet />
   
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
