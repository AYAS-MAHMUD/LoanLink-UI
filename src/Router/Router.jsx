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
import Dashboard from "../Dashboard/AdminDashboard/Dashboard";
import ManageUser from "../Dashboard/AdminDashboard/ManageUser";
import LoanApplication from "../Dashboard/AdminDashboard/LoanApplication";
import DetailsCard from "../Components/DetailsCard";
import Myprofile from "../Dashboard/UserDashboard/Myprofile";
import MyLoan from "../Dashboard/UserDashboard/MyLoan";
import AdminPrivet from "../PrivetDashboard/AdminPrivet";
import AddLoan from "../Dashboard/ManagerDashboard/AddLoan";
import ManangeLoans from "../Dashboard/ManagerDashboard/ManangeLoans";
import PendingApplication from "../Dashboard/ManagerDashboard/PendingApplication";
import ApprovedApplication from "../Dashboard/ManagerDashboard/ApprovedApplication";
import AdminAllLoan from "../Dashboard/AdminDashboard/AdminAllLoan";


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
            },
            {
                path : '/detailsCard/:id',
                element : <PrivetRoute>
                    <DetailsCard/>
                </PrivetRoute>,
                loader : ({params})=>fetch(`http://localhost:3000/allloans/${params.id}`)
            }
        ]
    },
    {
        path : 'dashboard',
        element : 
            <MainDashboard/>
        ,
        children : [
            {
                path : 'AMdashboard',
                element : 
                    <Dashboard></Dashboard>
                
            },
            {
                path : 'manageusers',
                element :
                    <ManageUser/>
                
            },
            {
                path : 'allloan',
                element : <AdminAllLoan/>
                    
                
            },
            {
                path : 'loanapplication',
                element : 
                    <LoanApplication/>
               
            },
            {
                path : 'myprofile',
                element : <Myprofile/>
            },
            {
                path : 'myloan',
                element : <MyLoan/>
            },
            {
                path : 'addloan',
                element : <AddLoan/>
            },
            {
                path : 'manageloans',
                element : <ManangeLoans/> 
            },
            {
                path : 'pendingapplication',
                element : <PendingApplication/>
            },
            {
                path : 'approvedapplication',
                element : <ApprovedApplication/>
            }
        ]
        
    }
])