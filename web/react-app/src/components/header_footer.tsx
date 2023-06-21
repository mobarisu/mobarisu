import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './image/logo.png';
import cart from "./image/cart.jpeg";


export const StoreHeader: React.FC = () =>{
  const navigate = useNavigate();
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
  const navigate = useNavigate();
    return (
      //客側header
      <header className='header_ac_on'>
      <div className="header-logo">
          <a onClick={() => navigate("/food_list")}><img src={logo} className="logo" alt=''/></a>
      </div>
      <div className="header-cart">
          <a onClick={() => navigate("/food_cart")}><img src={cart} className="cart" alt='カート'/></a>
      </div>
  </header>
    );
};

export const StoreFooter: React.FC = () =>{
  const navigate = useNavigate();
  return (
    //店側footer
    <footer>
      <div className="footer-nav">
          <ul className='footer-nav-item'>
              <li><a href="#">よくある質問</a></li>
              <li><a href="#">利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
          </ul>
      </div>
      <p className="copyright">&copy&#058;2023 mobarisu Corp.</p>
    </footer>
  );
};

export const FoodFooter: React.FC = () =>{
  const navigate = useNavigate();
  return (
    //客側footer
    <footer>
      <div className="footer-nav">
          <ul className='footer-nav-item'>
              <li><a href="food_cart">カート</a></li>
              <li><a href="faq">よくある質問</a></li>
              <li><a href="#">利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
          </ul>
      </div>
      <p className="copyright">&copy&#058;2023 mobarisu Corp.</p>
    </footer>
  );
};