import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './food_cart.css';

interface CartItem {
  id: number;
  size: string;
  count: number;
}

const FoodCart: React.FC = () => {
  
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, size: 'M', count: 1 },
    { id: 2, size: 'M', count: 1 },
    { id: 3, size: 'S', count: 1 },
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

  return (
    <div className="App">
      <div className="hurucart">
        <h1 className=''>⇚</h1>
        <header className='ct_moji'>カート</header>
        <button className="btn_cart" onClick={() => navigate("/food_list")}>買い物を続ける</button>
      </div>

      <div className="scl">
        {cartItems.map(item => (
          <div className="top_line" key={item.id}>
            <div className="mj_sazi">
              <h2>商品名</h2>
              <a className='fin' onClick={() => removeItem(item.id)}>×</a>
            </div>

            <div className="mj_sazi">
              <label className="btn_change">サイズ: {item.size}</label>
              <button className="btn_change" onClick={() => navigate("/food_list")}>変更</button>
            </div>

            <div className="mj_sazi">
              <button className="btn_pm" onClick={() => decrement(item.id)}>
                －
              </button>
              <p>{item.count}</p>
              <button className="btn_pm" onClick={() => increment(item.id)}>
                ＋
              </button>
              <label>1200円</label>
            </div>
          </div>
        ))}
      </div>
      
      <div className='syoukei'>
        <div className='yohaku'>
          <label className='fin'>合計</label>
          <label className='gou'>1200円</label>
        </div>
      </div>

      <div>
        <button className='btn_personal' onClick={() => navigate("/personal_data")}>購入手続きへ</button>
      </div>
    </div>
  );
};

export default FoodCart;
