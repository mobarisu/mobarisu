import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './order_details.css';

interface CartItem {
  id: number;
  size: string;
  count: number;
  p: number;
  foodName: string;
}

const OrderDetails: React.FC = () => {
  const navigate = useNavigate();
  const ShopNumber = "AC";
  const Order = "45";
  let totalPrice = 0;

  const [order_menu, setOrderMenu] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      const cartItemsData: CartItem[] = JSON.parse(cartItemsString);
      setOrderMenu(cartItemsData);
    }
  }, []);

  const calculateTotalPrice = () => {
    let total = 0;
    order_menu.forEach((item) => {
      total += item.p * item.count;
    });
    return total;
  };

  const handleClearCart = () => {
    localStorage.removeItem('cartItems');
    navigate('/food_list');
  };

  const renderOrderMenu = () => {
    return order_menu.map((item, index) => {
      const subtotal = item.p * item.count;
      totalPrice += subtotal;

      return (
        <div className="order_menu_list" key={index}>
          <h3 className="order_menu_name">{item.foodName}</h3>
          <div className="order_menu_op">
            <p className="order_p">サイズ：{item.size}</p>
          </div>
          <div className="order_menu_price">
            <p className="order_p">個数：{item.count}</p>
            <h4 className="order_h4">{subtotal}円</h4>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>注文完了</title>
      </head>

      <div className="order_head">
        <header className="order_header">
        <button className='order_button' onClick={handleClearCart}>✕</button>
        </header>
        <h1 className="order_h1">注文完了しました</h1>
      </div>
      <div className="order_number">
        <h2 className="number1">{ShopNumber + Order}</h2>
      </div>
      <div className="order_mess">
        <p>*ショートメッセージに受け取り番号を送りました。</p>
      </div>
      <div className="order">
        <h2 className="order_title">注文内容</h2>
        <div className="order_border"></div>
        <div className="order_menu">{renderOrderMenu()}</div>
        <div className="order_border order_border_bt"></div>
      </div>
      <footer className="order_footer">
        <div className="price">
          <p className="order_price_title">合計</p>
          <h2 className="order_price">{calculateTotalPrice()}円</h2>
        </div>
      </footer>
    </>
  );
};

export default OrderDetails;
