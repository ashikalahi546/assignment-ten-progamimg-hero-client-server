import { useEffect, useState } from "react";
import Traveler from "./Traveler";

const AllTouristsSpot = () => {
  const [travelars, setTravelars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/travelers")
      .then((res) => res.json())
      .then((data) => {
        setTravelars(data);
      });
  }, []);

  console.log("t", travelars);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5 ">
        All <span className="text-pink-500">Tourists Sport</span>
      </h1>


      <div className="grid grid-cols-3 gap-8 w-8/12 mx-auto">
        {travelars?.map((travelar,e) => (
          <Traveler traveler={travelar} key={e}></Traveler>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
