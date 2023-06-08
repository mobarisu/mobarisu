import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './mail_change.css';

const MailChange: React.FC = () => {
    const navigate = useNavigate();
    const initialEmail = "example@denpa.jp";
    const initialPassword = "password123";

    const [currentEmail, setCurrentEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");

        if (newEmail !== confirmEmail) {
            setErrorMessage("*新しいメールアドレスが一致しません");
            return;
        }
        if (currentEmail !== initialEmail || password !== initialPassword) {
            setErrorMessage("*現在のメールアドレスまたはパスワードが正しくありません");
            return;
        }



        // メールアドレスの変更処理
        // ...

        navigate("/store_food_list"); // メールアドレス変更が成功したら、リダイレクトするなどの適切な処理を追加してください
    };

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>メールアドレス変更</title>
            </head>
            <header>メールアドレス変更</header>
            <body>
                <form onSubmit={handleSubmit}>
                    <div className="mail_change_form">
                        <div className="mail_change">
                            <label className='mail_change_label'>現在のメールアドレス</label><br />
                            <div className="mail_change_input">
                                <input type="email" className='Email' value={currentEmail} onChange={e => setCurrentEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mail_change">
                            <label className='mail_change_label'>新しいメールアドレス</label><br />
                            <div className="mail_change_input">
                                <input type="email" className='NewEmail' value={newEmail} onChange={e => setNewEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mail_change">
                            <label className='mail_change_label'>新しいメールアドレス確認</label><br />
                            <div className="mail_change_input">
                                <input type="email" className='NewEmail2' value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mail_change">
                            <label className='mail_change_label'>現在のパスワード</label><br />
                            <div className="mail_change_input">
                                <input type="password" className='pass' value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className="error">
                        {errorMessage && <div className="error_message">{errorMessage}</div>}
                        </div>
                        <div className="btn">
                            <button type="submit" className="btn_" id="submit-btn">
                                変更する
                            </button>
                        </div>
                    </div>
                </form>
            </body>
        </>
    );
};

export default MailChange;
