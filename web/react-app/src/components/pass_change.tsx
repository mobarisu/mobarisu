import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './pass_change.css';

const PassChange: React.FC = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage("*新しいパスワードが一致しません。");
            return;
        }

        if (newPassword.length < 12 || !/[a-z]/.test(newPassword) || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword) || !/[!@#$%^&*]/.test(newPassword)) {
            setErrorMessage("*パスワードは小文字、大文字、数字、記号のすべてを含めた12文字以上にしてください。");
            return;
        }

        navigate("/store_food_list"); 
    };

    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>パスワード変更</title>
            </head>
            <header className='header_ac_none'>パスワード変更</header>
            <body>
                <form onSubmit={handleSubmit}>
                    <div className="pass_change_form">
                        <div className="pass_change">
                            <label className='pass_change_label'>新しいパスワード</label><br />
                            <div className="pass_change_input">
                                <input
                                    type="password"
                                    className='pass'
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="pass_change">
                            <label className='pass_change_label'>新しいパスワード確認</label><br />
                            <div className="pass_change_input">
                                <input
                                    type="password"
                                    className='pass'
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {errorMessage && <div className="error">{errorMessage}</div>}
                            </div>
                                           </div>
                        <div className="btn">
                            <button type="submit" className="btn_" id="submit-btn">
                                変更する
                            </button>
                            </div>
                </form>
            </body>
        </>
    );
};

export default PassChange;
