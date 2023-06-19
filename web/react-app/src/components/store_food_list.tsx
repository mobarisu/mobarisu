import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './store_food_list.css';
import storeimage from "./image/store-image.jpg";
import food from "./image/food.jpg";
import StoreHeader from './store_header';

const StoreFoodList: React.FC = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const [isStockManagement, setIsStockManagement] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectedProductsStore, setSelectedProductsStore] = useState<number[]>([]);
  
  /*
  const foodCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  */

  useEffect(() => {
    
    const selectedItem: number[] = [];

    dummyData.filter(item => item.store_id === 'AC' && !item.on_sale).forEach( (item) => {
      selectedItem.push(item.product_id)
    })

    setSelectedProductsStore(selectedItem)

  },[]);

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
    {
      store_id: 'AC',
      product_id: 3,
      category_name: "サイド",
      product_name: "ポテトチップス",
      product_price: 500,
      on_sale: false
    },
    {
      store_id: 'AA',
      product_id: 4,
      category_name: "ドリンク",
      product_name: "タピオカミルクティー",
      product_price: 200,
      on_sale: true
    },
    {
      store_id: 'AC',
      product_id: 5,
      category_name: "ドリンク",
      product_name: "タピオカ黒糖ミルクティ鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱鬱",
      product_price: 250,
      on_sale: false
    },
    // ...他のダミーデータ
  ];

  const filteredMenu = dummyData.filter(item => item.store_id === 'AC');

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

  const handleCancel = () => {
    if (isStockManagement) {
      
      setShowMenu(true);
      setIsStockManagement(false);
      setSelectedImage('');

    } else {
      setShowMenu(false);
      setIsStockManagement(true);

      setSelectedProducts(selectedProductsStore)
    }
  };

  const handleConfirm = () => {
    
    setShowMenu(true);
    setIsStockManagement(false);
    setSelectedImage('');

    setSelectedProductsStore(selectedProducts)
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
  const Storeresetbtn = () =>{
    setSelectedProducts([]);
  }


  return (
    <>
      <StoreHeader /> 
      <div className="store_list_image">
        <img src={storeimage} className="store_food_list_image" alt=''/>
        <h1 className='store-name'>
          <p>吉野家</p>
        </h1>
      </div>

      <div className='food_list_contents'>
        <div className="menu_list">
          <h2>
            {showMenu ? (<p>メニュー</p>):(
              <div className="store_food_reset">
              <button className='store_food_reset_btn' onClick={Storeresetbtn}>全て外す</button>
              </div>
            )}
          </h2>
          <div className='scl'>
            <div className="store_list_menu">
              {filteredMenu.map(item => (
                <a key={item.product_id}>
                  {showMenu ? (
                    <div className="store_img_box">
                    <img src={food} className={`store_list_menu ${selectedProductsStore.includes(item.product_id) ? 'img_sold' : 'selected'}`} alt="" />
                    <p className={`store_img_p ${selectedProductsStore.includes(item.product_id) ? 'img_sold_p_active' : 'img_sold_p'}`}>SOLD　OUT</p>
                    </div>
                    ) : (
                    <div className="store_list_menu_checkbox_wrapper">
                      <input
                        type="checkbox"
                        className="store_list_menu_checkbox"
                        checked={selectedProducts.includes(item.product_id)}
                        onChange={() => handleImageSelect(item.product_id)}
                        
                      />
                      <div className="store_img_box">
                      <img
                        src={selectedImage === item.product_id.toString() ? food : food}
                        className={`store_list_menu ${selectedProducts.includes(item.product_id) ? 'img_sold' : 'selected'}`}
                        alt=""
                        onClick={() => handleCheckboxChange(item.product_id)}
                      />
                      <p className={`store_img_p ${selectedProducts.includes(item.product_id) ? 'img_sold_p_active' : 'img_sold_p'}`}>SOLD　OUT</p>
                      </div>
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
