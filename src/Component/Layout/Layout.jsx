import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Biodatas from "../Biodatas/Biodatas";
import SingleCard from "../Home/SingleCard";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Checkout from "../Biodatas/Checkout";
import PrivateRoute from "../Shared/PrivateRoute";
import DashBoard from "../Dashboard/DashBoard";
import EditBioData from "../Dashboard/EditBioData";
import ViewBiodata from "../Dashboard/ViewBiodata";
import MyContactReq from "../Dashboard/MyContactReq";
import MyFav from "../Dashboard/MyFav";
import AllUsers from "../Dashboard/Admin/AllUsers";





 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/Biodatas',
            element:<Biodatas/>,
        },
        {
            path:'/Login',
            element:<Login/>,
        },
        {
            path:'/Register',
            element:<Register/>,
        },
        {
            path:'/singleCard/:id',
            element:<PrivateRoute><SingleCard/></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/singleCard/${params.id}`)
        },
        {
            path:'/checkout/:id',
            element:<PrivateRoute><Checkout/></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
        },
      ]
    },
    {
        path:'/Dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
            {
                path:'/Dashboard',
                element:<EditBioData></EditBioData>
            },
            {
                path:'/Dashboard/ViewBioData',
                element:<ViewBiodata/>
            },
            {
                path:'/Dashboard/MyContactreq',
                element:<MyContactReq/>
            },
            {
                path:'/Dashboard/MyFav',
                element:<MyFav/>
            },
            {
                path:'/Dashboard/AllUsers',
                element:<AllUsers/>
            },
        ]

    }
  ]);
  