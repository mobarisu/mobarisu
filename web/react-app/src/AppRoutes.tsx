import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './components/App';
import food_cart from './components/food_cart';

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/food_cart", element: <food_cart /> },
]);