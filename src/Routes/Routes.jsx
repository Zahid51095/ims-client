import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Shops/Shop/Shop";
import CreateShop from "../pages/CreateShop/CreateShop/CreateShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Error from "../pages/Error/Error";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
          path: 'shops',
          element: <Shop></Shop>
        },
        {
          path: 'create-shop/:category',
          element: <CreateShop></CreateShop>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
       {
         path: 'cart',
         element: <Cart></Cart>
       },
       {
          path: 'payment',
          element: <Payment></Payment>
       },
       {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
       },

       // admin routes
       {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
       },
       {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>

       },
       {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
       },
       {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
       },
       {
         path: 'users',
         element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
       }
      ]
    }
  ]);