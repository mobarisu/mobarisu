import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './components/App';
import FoodCart from './components/food_cart';
import FoodList from './components/food_list';
import Account from './components/account';
// import FoodDetails from './components/food_details';
import PersonalData from './components/personal_data';
import FinalConfirmation from './components/final_confirmation';
// import OrderDetails from './components/order_details';
// import Faq from './components/faq';
import UseTerms from './components/use_terms';
import Confirmation from './components/confirmation';
import StoreData from './components/store_data';
import StoreLogin from './components/store_login';
import StoreFoodList from './components/store_food_list';
import FoodRegistration from './components/food_registration';
import FoodChange from './components/food_change';
import StoreDataChange from './components/store_data_change';
// import MailChange from './components/mail_change';
// import CurrentMail from './components/current_mail';
// import PassChange from './components/pass_change';
// import FoodDelivery from './components/food_delivery';
// import OrderHistory from './components/order_history';



export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/food_cart", element: <FoodCart /> },
  { path: "/food_list", element: <FoodList /> },
  { path: "/account", element: <Account /> },
  // { path: "/food_details", element: <FoodDetails /> },
  { path: "/personal_data", element: <PersonalData /> },
  { path: "/final_confirmation", element: <FinalConfirmation /> },
  // { path: "/order_details", element: <OrderDetails /> },
  // { path: "/Faq", element: <Faq /> },
  { path: "/use_terms", element: <UseTerms /> },
  { path: "/confirmation", element: <Confirmation /> },
  { path: "/store_data", element: <StoreData /> },
{ path: "/store_login", element: <StoreLogin /> },
  { path: "/store_food_list", element: <StoreFoodList /> },
  { path: "/food_registration", element: <FoodRegistration /> },
  { path: "/food_change", element: <FoodChange /> },
  { path: "/store_data_change", element: <StoreDataChange /> },
  // { path: "/mail_change", element: <MailChange /> },
  // { path: "/current_mail", element: <CurrentMail /> },
  // { path: "/pass_change", element: <PassChange /> },
  // { path: "/food_delivery", element: <FoodDelivery /> },
  // { path: "/order_history", element: <OrderHistory /> }

]);