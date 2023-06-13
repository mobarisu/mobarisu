import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './final_confirmation.css';

interface CartItem {
  id: number;
  size: string;
  count: number;
}

const FinalConfirmation: React.FC = () => {
  const name = "アンサー";
  const phone = "08008080808";
  const formattedNumber =phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, size: 'M', count: 2 },
    { id: 2, size: 'M', count: 1 },
    { id: 3, size: 'S', count: 1 },
  ]);

   

  return (
    <div className="final_confima">
      <div className="final_cart">
        <h1 className='back_f' onClick={() => navigate(-1)}>⇚</h1>
        </div>
        <h1 className='ct_moji1'>商品注文確認</h1>
   
      <div className='tyu'>
        <p className='ptag'>＊商品お受け取り時間が前後する場合がございます</p>
      </div>
      
      <div className='person'>
        <div className='perso_nm'>
          <label htmlFor="">お名前</label>
          <p className='left_per'>{name}</p>
        </div>

        <div className='perso_ph'>
          <label htmlFor="">電話番号</label>
          <p className='left_per'>{formattedNumber}</p>
        </div>
      </div>
      
      <div className="scl">
        {cartItems.map(item => (
          <div className="final_line" key={item.id}>
            <div className="final_title">
              <h2>商品名</h2>
            </div>

            <div className="final_sazi">
              <label>サイズ: {item.size}</label>
              </div>
            
            <div className='final_sazi'>
            <div className='per_fl'>
              <label>個数 {item.count}</label>
              <label className='f_c_p'>12000円</label>
            </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className='syoukei'>
        <div className='yohaku'>
          <label className='final_fin'>合計</label>
          <label className='final_gou'>12000円</label>
        </div>
      </div>

      <div>
        <button className='btn_personal' onClick={() => navigate("/order_details")}>購入手続きへ</button>
      </div>
    </div>
  );
};

export default FinalConfirmation;