import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth/AuthProvider";
import SingleList from "./SingleList";

const MyList = () => {
  const { user, logOut } = useContext(AuthContext);
  const [travelars, setTravelars] = useState([]);
  const myList = travelars?.filter(
    (traveler) => traveler?.email == user?.email
  );
  useEffect(() => {
    fetch("http://localhost:8000/travelers")
      .then((res) => res.json())
      .then((data) => {
        setTravelars(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-4xl mt-24 mb-16">
        My <span className="text-pink-500 ">List</span>
      </h1>

      <div className="">
        {myList.map((singleList, idx) => (
          <SingleList singleList={singleList} key={idx}></SingleList>
        ))}
      </div>
    </div>
  );
};

export default MyList;
