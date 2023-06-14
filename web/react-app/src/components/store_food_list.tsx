import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './store_food_list.css';
import storeimage from "./image/store-image.jpg";
import logo from "./image/logo.png";
import food from "./image/food.jpg";

const StoreFoodList: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('メイン');
  const [showMenu, setShowMenu] = useState(true);
  const [isStockManagement, setIsStockManagement] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const foodCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const dummyData = [
    {
      store_id: 'AC',
      product_id: 1,
      category_name: "メイン",
      product_name: "焦がしネギ焼き鳥丼",
      product_price: 1200,
      on_sale: true
    },
    {
      store_id: 'AC',
      product_id: 2,
      category_name: "メイン",
      product_name: "ネギ焼き鳥丼",
      product_price: 1200,
      on_sale: true
    },
    // ...他のダミーデータ
  ];

  const filteredMenu = dummyData.filter(item => item.store_id === 'AC' && item.category_name === selectedCategory);

  const handleCheckboxChange = (productId: number) => {
    const updatedSelectedProducts = [...selectedProducts];
    const selectedIndex = updatedSelectedProducts.indexOf(productId);

    if (selectedIndex === -1) {
      updatedSelectedProducts.push(productId);
    } else {
      updatedSelectedProducts.splice(selectedIndex, 1);
    }

    setSelectedProducts(updatedSelectedProducts);
  };

  const toggleStockManagement = () => {
    if (isStockManagement) {
      setShowMenu(true);
      setIsStockManagement(false);
      setSelectedImage('');
      setSelectedProducts([]);
    } else {
      setShowMenu(false);
      setIsStockManagement(true);
    }
  };

  const handleImageSelect = (productId: number) => {
    if (isStockManagement) {
      const updatedProducts = selectedProducts.includes(productId)
        ? selectedProducts.filter(id => id !== productId)
        : [...selectedProducts, productId];
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedImage(productId.toString());
    }
  };

  const handleCancel = () => {
    toggleStockManagement();
  };

  const handleConfirm = () => {
    setShowMenu(true);
    setIsStockManagement(false);
    setSelectedImage('');
  };

  return (
    <>
      <header className='header_ac_on'>
        <div className="header-logo">
          <a href="./"><img src={logo} className="logo" alt=''/></a>
        </div>
      </header>

      <div className="store_list_image">
        <img src={storeimage} className="store_food_list_image" alt=''/>
        <h1 className='store-name'>
          <p>吉野家</p>
        </h1>
      </div>

      <div className='food_list_contents'>
        <div className="menu_list">
          <h2>
            {showMenu && <p>メニュー</p>}
          </h2>
          <div className='scl'>
            <div className="store_list_menu">
              {filteredMenu.map(item => (
                <a key={item.product_id}>
                  {showMenu ? (
                    <img src={food} className="store_list_menu" alt="" />
                  ) : (
                    <div className="store_list_menu_checkbox_wrapper">
                      <input
                        type="checkbox"
                        className="store_list_menu_checkbox"
                        checked={selectedProducts.includes(item.product_id)}
                        onChange={() => handleImageSelect(item.product_id)}
                      />
                      <img
                        src={selectedImage === item.product_id.toString() ? food : food}
                        className={`store_list_menu${selectedProducts.includes(item.product_id) ? ' selected' : ''}`}
                        alt=""
                        onClick={() => handleCheckboxChange(item.product_id)}
                      />
                    </div>
                  )}
                  <h2>
                    <div className='food_list_change'>
                      <p className='food_list_name'>{item.product_name}</p>
                      {showMenu && (
                        <button className='change_the_food' onClick={() => navigate('/food_change')}>変更</button>
                      )}
                    </div>
                    <p className='store_list_price'>{item.product_price}円</p>
                  </h2>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='button_kanri'>
          <button
            className={`food_out store_list_bt ${isStockManagement ? 'cancel_stock_management' : ''}`}
            onClick={handleCancel}
          >
            {isStockManagement ? 'キャンセル' : '在庫管理'}
          </button>
          <button
            className={`food_list_registration store_list_bt ${isStockManagement ? 'confirm_registration' : ''}`}
            onClick={isStockManagement ? handleConfirm : () => navigate('/food_registration')}
          >
            {isStockManagement ? '確定' : '商品登録'}
          </button>
        </div>
      </div>
    </>
  );
};

export default StoreFoodList;
