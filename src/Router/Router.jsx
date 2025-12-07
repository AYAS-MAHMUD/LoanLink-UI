import { createBrowserRouter } from "react-router";
import Rootlayout from "../Pages/Rootlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import AllLoans from "../Pages/AllLoans";
import MainDashboard from "../Dashboard/MainDashboard";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRoute from "../Provider/PrivetRoute";
import Dashboard from "../Dashboard/Dashboard";


export const router = createBrowserRouter([
    {
        path : '/',
        Component : Rootlayout,
        errorElement : <ErrorPage/>,
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
            },
            {
                path : 'contact',
                Component : Contact
            },
            {
                path : 'about',
                Component : About
            },
            {
                path : 'allloan',
                Component : AllLoans
            }
        ]
    },
    {
        path : 'dashboard',
        element : <MainDashboard/>,
        children : [
            {
                path : 'AMdashboard',
                Component : <Dashboard></Dashboard>
            }
        ]
    }
])