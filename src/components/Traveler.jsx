import React from 'react';
import { Link } from 'react-router-dom';

const Traveler = ({traveler}) => {
    const {image,title,profile,description,price,_id   } = traveler

    return (
        <div className='mt-2'>

<div className="relative">
        <img className="w-full" src={image} alt="" />
        <div className="absolute top-4 rounded-md bg-white w-28 left-4  ">
          <img className="ml-5 mt-3" src={profile} alt="" />
          <p className="text-center py-3">{title}</p>
        </div>
        <div className="absolute bottom-7  text-white pl-5">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="py-2">{description}</p>
          <div className="flex 2xl:gap-20 gap-8">
            <h3 className="text-3xl font-bold"> {price}</h3>
            <Link>
              <button className="bg-pink-500 hover:bg-pink-600 duration-150 delay-150 text-white py-1.5 px-3.5 rounded-lg font-medium  ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Traveler;