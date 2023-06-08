import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './account.css';

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordFormatError, setPasswordFormatError] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // チェックボックスの状態を更新
  };

  const validatePasswordFormat = (password: string): boolean => {
    // パスワードのフォーマットを検証するロジックを追加
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const symbolRegex = /[\W_]/;

    if (
      password.length < 12 ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !digitRegex.test(password) ||
      !symbolRegex.test(password)
    ) {
      return false;
    }

    return true;
  };

  const account_Submit = (event: React.FormEvent) => {
    event.preventDefault();

    // パスワード一致チェック
    if (password !== confirmPassword) {
      setPasswordError('*パスワードが一致しません');
      return;
    } else {
      setPasswordError(''); // 不一致の場合はエラーメッセージをクリアする
    }

    // パスワードフォーマットチェック
    if (!validatePasswordFormat(password)) {
      setPasswordFormatError(
        '*大文字、小文字、数字、記号を含んだ12文字以上255文字以下のパスワードを入力してください'
      );
      return;
    } else {
      setPasswordFormatError(''); // フォーマットが正しい場合はエラーメッセージをクリアする
    }

    // パスワードが一致し、フォーマットも正しい場合、遷移処理
    navigate('/confirmation');
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>アカウント登録</title>
      </head>
      <header>アカウント登録</header>
      <body className="account_body">
        <form onSubmit={account_Submit}>
          <div className="account_form">
            <div className="account">
              <label className='account_label'>メールアドレス</label><br />
              <div className="account_input">
              <input type="email" className='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            </div>
            <div className="account">
              <label className='account_label'>パスワード</label><br />
              <div className="account_input">
              <input type="password" className='pass' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            </div>
            <div className="account">
              <label className='account_label'>パスワード確認</label><br />
              <div className="account_input">
              <input type="password" className='pass2' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            </div>
            {passwordError && <div className="error">{passwordError}</div>}
            {passwordFormatError && <div className="error">{passwordFormatError}</div>}
            <div className="btn">
              <button type="submit" className="btn_" id="submit-btn" >
                登録
              </button>
            </div>
          </div>
        </form>
      </body>
    </>
  );
};

export default Account;