import { createBrowserRouter } from "react-router";
import Rootlayout from "../Pages/Rootlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


export const router = createBrowserRouter([
    {
        path : '/',
        Component : Rootlayout,
        children : [
            {
                index : true,
                Component : Home
            },
            {
                path : 'login',
                Component : Login
            },
            {
                path : 'register',
                Component : Register
            }
        ]
    }
])