import React from "react";
import { createBrowserRouter } from "react-router-dom";
import FoodCart from '../components/food_cart';
import FoodList from '../components/food_list';
import Personal from '../components/personal_data';


export const router = createBrowserRouter([
  { path: "/food_cart", element: <FoodCart /> },
  { path: "/food_list", element: <FoodList /> },
  { path: "/personal_data", element: <Personal />},

]);