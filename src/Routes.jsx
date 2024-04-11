import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import CartPage from "./Components/CartPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import Summer from "./Components/Summer.jsx";
import Winter from "./Components/Winter.jsx";
import Wallet from "./Components/Wallets.jsx";
import Eyewear from "./Components/Eyewear.jsx";
import Footwear from "./Components/Footwear.jsx";

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
        path: "/summer",
        element: <Summer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/winter",
        element: <Winter />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/wallets",
        element: <Wallet />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/eyewear",
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
