import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";


const TouristsSpot = () => {
    
  const travelars = useLoaderData()
  
    return (
        <div className="2xl:w-9/12 lg:w-11/12 mx-auto lg:px-0 px-5">
            <h1 className="text-center font-bold text-4xl my-10">Tourists <span className=" text-pink-500 ">Spot</span></h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              {
                travelars.map((singleTouristSpot,i) => <SingleTouristSpot singleTouristSpot={singleTouristSpot} key={i}></SingleTouristSpot>)
              }
            </div>
        </div>
    );
};

export default TouristsSpot;