import React, { useState } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './image/logo.png';
import cart from "./image/cart.jpeg";
import './hanbarger.css';



export const FoodHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/food_cart',{replace:true});
  };
  return (
    <header className='header_ac_on'>
      <div className="header-logo">
        <a onClick={() => navigate("/food_list")}><img src={logo} className="logo" alt='' /></a>
      </div>
      <div className="header-cart">
        <a onClick={handleCartClick}><img src={cart} className="cart" alt='カート' /></a>
      </div>
    </header>
  );
};


export const StoreHeader: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    navigate("/food_list"); // ログアウト後のリダイレクト先を指定してください
    setShowModal(false);
    // ログアウトの処理を追加してください
  };
  const toggleMenu = () => {
    setShowModal(false); // モーダルを非表示にする
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className='header_ac_on'>
      <div className="header-logo">
        <a onClick={() => navigate("/store_food_list")}><img src={logo} className="logo" alt=''/></a>
      </div>


      <div className="hanbergar">
        <div>
          {/* ハンバーガーメニュー */}
          <input
            id="drawer_input"
            className="drawer_hidden"
            type="checkbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
            disabled={showModal} // モーダルが表示されているときは無効化
          />
          <label htmlFor="drawer_input" className="drawer_open"><span></span></label>
          <nav className="nav_content">
            {/* ハンバーガーメニューの中身 */}
            <ul className="nav_list">
              <button className='nav_item' onClick={() => navigate("/food_delivery")}>商品受け取り</button>
              <button className='nav_item' onClick={() => navigate("/store_food_list")}>商品一覧</button>
              <button className='nav_item' onClick={() => navigate("/order_history")}>注文履歴</button>
              <button className='nav_item' onClick={() => navigate("/store_data_change")}>店舗情報変更</button>
              <button className='nav_item' onClick={() => navigate("/mail_change")}>メールアドレス変更</button>
              <button className='nav_item' onClick={() => navigate("/pass_change")}>パスワード変更</button>
              <button className='nav_item nav_rog' onClick={handleLogout}>ログアウト</button>
              {showModal && (
              <Modal closeModal={closeModal} handleConfirmLogout={handleConfirmLogout} />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface ModalProps {
  closeModal: () => void;
  handleConfirmLogout: () => void;
}

function Modal({ closeModal, handleConfirmLogout }: ModalProps) {
  return (
    <div id="overlay" onClick={closeModal}>
      <div id="header_content">
        <p>ログアウトしますか？</p>
        <div className="modal-buttons">
          <button className='rog_btn' onClick={closeModal}>キャンセル</button>
          <button className='rog_btn' onClick={handleConfirmLogout}>ログアウト</button>
        </div>
      </div>
    </div>
  );
}




export const StoreFooter: React.FC = () =>{
  const navigate = useNavigate();
  return (
    //店側footer
    <footer>
      <div className="footer-nav">
          <ul className='footer-nav-item'>
              <li><a href="#">よくある質問</a></li>
              <li><a href="#">利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
          </ul>
      </div>
      <p className="copyright">&copy&#058;2023 mobarisu Corp.</p>
    </footer>
  );
};

export const FoodFooter: React.FC = () =>{
  const navigate = useNavigate();
  return (
    //客側footer
    <footer>
      <div className="footer-nav">
          <ul className='footer-nav-item'>
              <li><a href="food_cart">カート</a></li>
              <li><a href="faq">よくある質問</a></li>
              <li><a href="#">利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
          </ul>
      </div>
      <p className="copyright">&copy&#058;2023 mobarisu Corp.</p>
    </footer>
  );
};