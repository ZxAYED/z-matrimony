import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import Biodatas from "../Biodatas/Biodatas";
import SingleCard from "../Home/SingleCard";




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
            path:'/singleCard/:id',
            element:<SingleCard/>,
            loader: ({params}) => fetch(`http://localhost:5000/singleCard/${params.id}`)
        },
      ]
    },
  ]);
  