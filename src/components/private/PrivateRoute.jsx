import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center text-pink-500 "><span className="loading loading-infinity loading-lg "></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate  to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;