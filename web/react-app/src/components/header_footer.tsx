import React from 'react';
import logo from './image/logo.png';
// import cart from "./image/cart.jpeg";
// import food from "./image/food.jpg";


export const StoreHeader: React.FC = () =>{
    return (
      // 店側header
        <header className='header_ac_on'>
        <div className="header-logo">
          <a href="#"><img src={logo} className="logo" alt=''/></a>
        </div>
      </header>
    );
};

export const FoodHeader: React.FC = () =>{
    return (
      //客側header
        <header className='header_ac_on'>
        <div className="header-logo">
          <a href="#"><img src={logo} className="logo" alt=''/></a>
        </div>
      </header>
    );
};

export const StoreFooter: React.FC = () =>{
  return (
    //店側footer
      <footer>
        <h1>footer</h1>
      </footer>
  );
};

export const FoodFooter: React.FC = () =>{
  return (
    //客側footer
    <footer>
    <h1>footer</h1>
  </footer>
  );
};