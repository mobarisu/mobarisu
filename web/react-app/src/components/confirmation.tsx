import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';


const Confirmation: React.FC = () => {

  const navigate = useNavigate();
  const email = "abcd121212@denpa.aaa";

  return (
   <>
   <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>メールアドレス確認</title>
      </head>
      <header>メールアドレス確認</header>
    <body>
      <div className='conf_p'>
        <p className='conf_p_text'>{email}にメールを送信しました。<br />メールが届かない場合は再送信を押してしてください。</p>
      </div>
      <div className="btn">
              <button type="submit" className="btn_" id="submit-btn" >
                再送信
              </button>
            </div>
          <div className='account_back'>
          <button className='account_back_btn' onClick={()=> navigate('/account')}>メールアドレスを変更する</button>
          </div>
    </body>
   </>
  );
};

export default Confirmation;
