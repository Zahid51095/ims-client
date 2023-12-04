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
         path: 'cart',
         element: <Cart></Cart>
       },

       // admin routes
       {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>

       },
       {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
       }
      ]
    }
  ]);