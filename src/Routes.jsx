import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import CartPage from "./Components/CartPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import AllClothing from "./Components/AllClothing.jsx";
import Summer from "./Components/Summer.jsx";
import Winter from "./Components/Winter.jsx";
import Wallet from "./Components/Wallets.jsx";
import Eyewear from "./Components/Eyewear.jsx";
import Footwear from "./Components/Footwear.jsx";
import LikedProducts from "./Components/LikedProducts.jsx";
import AllAccessories from "./Components/AllAccessories.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/likes",
        element: <LikedProducts />,
        errorElement: <ErrorPage />,
      },
      {
        path: "clothing",
        element: <AllClothing />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clothing/summer",
        element: <Summer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clothing/winter",
        element: <Winter />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/accessories",
        element: <AllAccessories />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/accessories/wallets",
        element: <Wallet />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/accessories/eyewear",
        element: <Eyewear />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/footwear",
        element: <Footwear />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default { router };
