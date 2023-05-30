import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';


const PersonalData: React.FC = () => {
  
  const navigate = useNavigate();



  const aa = () =>{
    console.log(1);
  } 

  return (
    <div className="App">
      <div className="cart">
        <h1 className=''>⇚</h1>
        <h1 className='hidari'>カート</h1>
        <button className="btn_cart" onClick={() => navigate("/food_list")}>買い物を続ける</button>
      </div>

          <div>
            <button className='btn_personal' onClick={() => navigate("App")}>購入手続きへ</button>
          </div>

    </div>
  );
};

export default PersonalData;
