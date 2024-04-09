import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import CartPage from "./Components/CartPage.jsx";
import HomePage from "./Components/HomePage.jsx";

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
    ],
  },
]);

export default { router };
