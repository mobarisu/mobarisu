import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

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

  const aa = () =>{
    console.log(1);
  } 

  return (
    <div className="App">
      <div className="cart">
        <h1 className=''>⇚</h1>
        <h1 className='hidari'>カート</h1>
        <button className="btn_cart" onClick={() => navigate("food_list")}>買い物を続ける</button>
      </div>

      <div className="scl">

        {cartItems.map(item => (
          <div className="line" key={item.id}>

            <div className="sazi">
              <h2>商品名</h2>
              <label className='fin'>×</label>
            </div>

            <div className="sazi">
              <label className="btn_change">サイズ: {item.size}</label>
              <button className="btn_change" onClick={() => navigate("food_cart")}>変更</button>
            </div>

            <div className="sazi">
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
            <label className='fin'>合計</label>
            <label className='gou'>12000円</label>
          </div>

          <div>
            <button className='btn_personal' onClick={() => navigate("personal_data")}>購入手続きへ</button>
          </div>

    </div>
  );
};

export default FoodCart;
