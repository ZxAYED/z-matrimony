import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Biodatas from "../Biodatas/Biodatas";
import SingleCard from "../Home/SingleCard";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Checkout from "../Shared/Checkout/Checkout";
import PrivateRoute from "../Shared/PrivateRoute";
import DashBoard from "../Dashboard/DashBoard";
import EditBioData from "../Dashboard/User/CreateBioData/EditBioData";
import ViewBiodata from "../Dashboard/User/Edit&ViewBiodata/ViewBiodata";
import MyContactReq from "../Dashboard/User/ContactRequest/MyContactReq";
import MyFav from "../Dashboard/User/MyFavContact/MyFav";
import AllUsers from "../Dashboard/Admin/AllUsers";
import AdminDash from "../Dashboard/Admin/AdminDash";
import AdminApprove from "../Dashboard/Admin/AdminApprove";
import AdminContact from "../Dashboard/Admin/AdminContact";


import GotMarried from "../Dashboard/User/GotMarried/GotMarried";
import About from "../Shared/About";
import Tipstricks from "../DatingTips/Tips&tricks";


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
            path:'/About',
            element:<About/>,
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
            path:'/tips&tricks',
            element:<Tipstricks/>,
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
                path:'/Dashboard/Married',
                element:<GotMarried/>
            },
          
        ],

    },
    {
        path:'/Dashboard/admin',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
            {
                path:'/Dashboard/admin',
                element:<AdminDash></AdminDash>
            },
            {
                path:'/Dashboard/admin/Users',
                element:<AllUsers/>
            },
            {
                path:'/Dashboard/admin/approve',
                element:<AdminApprove/>
            },
            {
                path:'/Dashboard/admin/contact',
                element:<AdminContact/>
            },
           
           
        ],
       

   
        
       

    }
  ]);
  