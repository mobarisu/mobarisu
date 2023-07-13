import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './final_confirmation.css';
import { FoodHeader, FoodFooter } from './header_footer';

interface CartItem {
  id: number;
  size: string;
  count: number;
  p: number;
  foodName: string;
}

const calculateTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.count * item.p, 0);
};

const FinalConfirmation: React.FC = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      const cartItemsData: CartItem[] = JSON.parse(cartItemsString);
      setCartItems(cartItemsData);
    }
  }, []);

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };
  const handlePurchase = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    navigate('/order_details');
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>最終注文確認画面</title>
      </head>
      <FoodHeader />

      <div className="final_confirmation">
        <div className="final_cart">
          <span className="back_f" onClick={() => navigate(-1)}></span>
        </div>
        <h1 className="ct_moji1">商品注文確認</h1>
        <div className="tyu">
          <p className="ptag">＊商品お受け取り時間が前後する場合がございます</p>
        </div>

        <div className="scl">
          {cartItems.map((item) => (
            <div className="final_line" key={item.id}>
              <div className="final_title">
                <h2>{item.foodName}</h2>
              </div>

              <div className="final_sazi">
                <label>サイズ: {item.size}</label>
              </div>
              
              <div className="final_sazi">
                <div className="per_fl">
                  <label>個数 {item.count}</label>
                  <label className="f_c_p">{item.p * item.count}円</label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="final_syoukei">
          <div className="yohaku">
            <label className="final_fin">合計</label>
          </div>
          <label className="final_gou">{calculateTotal(cartItems)}円</label>
        </div>

        <div>
          <button className="btn_personal" onClick={handlePurchase}>購入</button>
        </div>
      </div>
      <FoodFooter />
    </>
  );
};

export default FinalConfirmation;
