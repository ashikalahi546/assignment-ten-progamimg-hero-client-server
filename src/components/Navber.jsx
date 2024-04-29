import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);
  const handleSingOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/addtourists">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="alltourists">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/mylist">My List</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-28 font-medium "
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost gap-0 md:text-2xl text-lg ">
          <span>
            Tr<span className="text-pink-500">ave</span>lers
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-medium">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
      
        {user ? 
          <div className="flex items-center gap-3 gruop relative ">
     
            <img

            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}

              className="size-12 rounded-full relative hover cursor-pointer"
              src="/image/user1.jpg"
              alt=""
            />
            
       <h2 className={`absolute top-[55px] left-[-30px] ${hovered ? 'block' : 'hidden'}   `}>
        {
          user?.email
        }
       </h2>
            <Link to="/login">
    
              <button
                onClick={handleSingOut}
                className="btn  bg-pink-500 text-white "
              >
                Sing Out
              </button>
            </Link>
          </div>
        : (
          <Link to="/login">

            <button className="btn bg-pink-500 text-white ml-4">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
