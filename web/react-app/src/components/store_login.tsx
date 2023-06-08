import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './store_login.css';

const StoreLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const storedEmail = "example@denpa.jp"; // 登録されているメールアドレス
    const storedPassword = "password123"; // 登録されているパスワード

    if (email === storedEmail && password === storedPassword) {
      navigate("/store_food_list"); // ログイン成功時の遷移先URL
    } else {
      alert("メールアドレスかパスワードが間違っています。");
    }
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ログイン</title>
      </head>
      <header>ログイン</header>
      <body>
        <form onSubmit={handleSubmit}>
          <div className="login_form">
            <div className="login">
              <label className='login_label'>メールアドレス</label><br />
              <div className="login_input">
                <input type="email" className='email' value={email} onChange={handleEmailChange} required />
              </div>
            </div>
            <div className="login">
              <label className='login_label'>パスワード</label><br />
              <div className="login_input">
                <input type="password" className='pass' value={password} onChange={handlePasswordChange} required />
              </div>
              <div className="pass_btn">
              <button className='pass_btn_' onClick={()=> navigate('/current_mail')}>パスワードを忘れた方はこちら</button>
              </div>
            </div>
            <div className="btn">
              <button type="submit" className="btn_" id="submit-btn">
                ログイン
              </button>
            </div>
          </div>
        </form>
      </body>
    </>
  );
};

export default StoreLogin;
