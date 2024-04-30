import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const TouristViewDetails = () => {
  const [viewData, setViewData] = useState([]);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    (() => {
      fetch(`https://assignment-server-rho-snowy.vercel.app/travelers/${id}`)
        .then((res) => res.json())
        .then((data) => setViewData(data));
    })();
  }, []);
  console.log(viewData);

  return (
    <div className="my-20">
      
      <div className="mt-6 flex gap-10 w-8/12 mx-auto items-center ">
        <div className="">
          <div className="relative size-96">
            <img className=" relative size-96 " src={viewData?.image} alt="" />
            <p className="absolute bottom-6 text-white bg-pink-500 px-3 py-1.5 rounded-md font-medium right-5">
              More Photos
            </p>
          </div>
        </div>
        <div className="w-6/12 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">{viewData?.title}</h1>
          <h3 className="text-base font-medium">{viewData?.descriptionTitle}</h3>
          <h2 className="flex items-center gap-1 text-lg font-medium">
            
            <IoLocationOutline className="text-pink-500" /> <span>Bangladesh</span>
          </h2>
          <h4 className="text-lg font-medium">7 days 7 nights</h4>
          <div className="flex text-pink-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          </div>
          <p className="font-medium"><span className="text-pink-500">5 star </span>reviews</p>
         <div className="flex gap-10">
         <h3 className="text-3xl font-bold">{viewData?.price}</h3>
         <button className="bg-pink-500 hover:bg-pink-600 duration-150 delay-150 px-4 py-1.5 rounded-lg text-white font-medium ">Book Now</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default TouristViewDetails;
