import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./footer/Footer";
// import TouristsSpot from "./TouristsSpot";

const Main = () => {
  return (
    <div>
      <div className="lg:container mx-auto">
        <Navber></Navber>
  
        <Outlet />
        {/* <TouristsSpot/> */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
