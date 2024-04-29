import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;