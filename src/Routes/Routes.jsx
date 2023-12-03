import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Shops/Shop/Shop";
import CreateShop from "../pages/CreateShop/CreateShop/CreateShop";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          path: 'create-shop',
          element: <CreateShop></CreateShop>
        }
      ]
    },
  ]);