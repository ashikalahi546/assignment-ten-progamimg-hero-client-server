import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import ErrorPage from "./components/error/ErrorPage";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddTouristsSpot from "./components/AddTouristsSpot";
import AllTouristsSpot from "./components/AllTouristsSpot";
import MyList from "./components/MyList";
import AuthProvider from "./components/auth/AuthProvider";
import TouristViewDetails from "./components/TouristViewDetails";
import PrivateRoute from "./components/private/PrivateRoute";
import UpdateTravelars from "./components/UpdateTravelars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
 
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('https://assignment-server-rho-snowy.vercel.app/travelers'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtourists",
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
      },
      {
        path: "/alltourists",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/mylist",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
  
      },
      {
        path:'/touristViewDetails/:id',
        element:<TouristViewDetails/>,
        
      },
      {
        path:'/updatetravelars/:id',
        element:<UpdateTravelars/>,
        loader:({params})=>fetch(`https://assignment-server-rho-snowy.vercel.app/travelers/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>
);
