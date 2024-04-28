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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
 
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('http://localhost:8000/travelers'),
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
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "/alltourists",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
      },
      {
        path:'/touristViewDetails/:id',
        element:<TouristViewDetails/>,
        loader:({params})=>fetch(`http://localhost:8000/travelers${params.id}`)
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
