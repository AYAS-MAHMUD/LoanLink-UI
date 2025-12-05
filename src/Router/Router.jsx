import { createBrowserRouter } from "react-router";
import Rootlayout from "../Pages/Rootlayout";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
        path : '/',
        Component : Rootlayout,
        children : [
            {
                index : true,
                Component : Home
            }
        ]
    }
])