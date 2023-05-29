import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './components/App';
import FoodCart from './components/food_cart';
import FoodList from './components/food_list';

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/food_cart", element: <FoodCart /> },
  { path: "/food_list", element: <FoodList /> }

]);