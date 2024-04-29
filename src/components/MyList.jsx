// import { useLoaderData } from "react-router-dom";
// import Traveler from "./Traveler";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth/AuthProvider";




const MyList = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [myList, setMyList] = useState([]);
      const [travelars,setTravelars] = useState([])

      const myList = travelars?.filter(traveler => traveler?.email == user?.email);
    useEffect(()=>{
    fetch('http://localhost:8000/travelers')
    .then(res=>res.json())
    .then(data=>{
      setTravelars(data)
    })
  },[])

  console.log("myList<",myList)

    return (
        <div>
        {/* {travelers?.map (traveler=><Traveler traveler={traveler}></Traveler>)} */}
        
        </div>
    );
};

export default MyList;