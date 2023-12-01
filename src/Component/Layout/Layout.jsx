import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Biodatas from "../Biodatas/Biodatas";
import SingleCard from "../Home/SingleCard";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Checkout from "../Biodatas/Checkout";




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
            element:<SingleCard/>,
            loader: ({params}) => fetch(`http://localhost:5000/singleCard/${params.id}`)
        },
        {
            path:'/checkout/:id',
            element:<Checkout/>,
            loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
        },
      ]
    },
  ]);
  