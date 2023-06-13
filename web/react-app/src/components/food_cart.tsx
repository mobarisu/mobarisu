import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './food_cart.css';

interface CartItem {
  id: number;
  size: string;
  count: number;
  p: number;
}

const FoodCart: React.FC = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, size: 'M', count: 1, p: 1200 },
    { id: 2, size: 'M', count: 1, p: 900 },
    { id: 3, size: 'S', count: 1, p: 1500 },
  ]);

  const increment = (id: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id && item.count < 20) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const decrement = (id: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.count * item.p, 0);
  };

  return (
    <div className="food_furu">
      <div className="hurucart">
        <div className='fd_ct'>
          <h1 className='back_fd' onClick={() => navigate(-1)}>⇚</h1>
        </div>
        <h1 className='ct_moji'>カート</h1>
        <button className="btn_cart" onClick={() => navigate("/food_list")}>買い物を続ける</button>
      </div>

      <div className="scl">
        {cartItems.map(item => (
          <div className="top_line" key={item.id}>
            <div className="food_sazi">
              <h2>商品名</h2>
              <button className='fin' onClick={() => removeItem(item.id)}>×</button>
            </div>
            <div className="food_sazi">
              <label className="food_change">サイズ: {item.size}</label>
              <button className="food_change" onClick={() => navigate("/food_list")}>変更</button>
            </div>
            <div className="count_sazi">
              <div className='count_fl'>
                <button className="btn_am" onClick={() => decrement(item.id)}>
                  －
                </button>
                <p className='food_caunt'>{item.count}</p>
                <button className="btn_pm" onClick={() => increment(item.id)}>
                  ＋
                </button>
              </div>
              <label className='food_money'>{item.p * item.count}円</label>
            </div>
          </div>
        ))}
      </div>

      <div className='syoukei'>
        <div className='yohaku'>
          <label className='fin'>合計</label>
          <label className='gou'>{calculateTotal()}円</label>
        </div>
      </div>

      <div>
        <button className='btn_personal' onClick={() => navigate("/personal_data")}>購入手続きへ</button>
      </div>
    </div>
  );
};

export default FoodCart;
