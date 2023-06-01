import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './current_mail.css';

const CurrentMail: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const initialEmail = "example@denpa.jp";
    const [mess, setMess] = useState(""); // 判定結果の状態を保持するstate

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === initialEmail) {
            setMess(`${email}にメールを送りました。`); 
        } else {
            setMess("*このメールアドレスは使われておりません。"); 
        }
    };

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>メールアドレス認証</title>
            </head>
            <header>メールアドレス認証</header>
            <body>
                <p className='current_p'>登録したメールアドレスを入力してください。</p>

                <form onSubmit={handleSubmit}>
                    <div className="current_form">
                        <div className="current">
                            <label>メールアドレス</label><br />
                            <div className="current_input">
                                <input type="email" className='email' value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className='current_mess'>{mess}</div> 
                        </div>
                        <div className="btn">
                            <button type="submit" className="btn_" id="submit-btn">
                                送信する
                            </button>
                        </div>
                    </div>
                </form>

                
            </body>
        </>
    );
};

export default CurrentMail;
