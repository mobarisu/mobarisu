import React, { useState, useEffect } from 'react';
import './food_list.css';
import storeimage from "./image/store-image.jpg"
import food from "./image/food.jpg"
import { FoodHeader, FoodFooter } from './header_footer';
import axios from 'axios';

const FoodList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('メイン');
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await axios.post('localhost:3000/food_list', { storeid: '1' });
      setMenuData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const foodCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredMenu = menuData.filter(
    (item: any) => item.category_name === selectedCategory && item.product_id === 1
  );

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>商品一覧</title>
      </head>
      <FoodHeader />

      <div className="store-image">
        <img src={storeimage} className="store-image" alt="" />
        <h1 className='store-name'>
          <p>吉野家</p>
        </h1>
        <p className='store_introduction'>新鮮な食材を使った美味しいすき焼きや丼物をリーズナブルに提供。心地よい雰囲気でおくつろぎください。ご家族や友人との食事に最適です。</p>
      </div>

      <div className='contents'>
        <div className="menu">
          <h2>
            <p>メニュー</p>
          </h2>
          <div className="food">
            {filteredMenu.map((item: any) => (
              <a href="./food_details" key={item.product_id}>
                <img src={food} className="food" alt='' />
                <h2>
                  <p>{item.product_name}</p>
                  <p>{item.product_price}円</p>
                </h2>
              </a>
            ))}
          </div>
        </div>
        <div className="food-category">
          <ul className='category'>
            <button
              type='button'
              className={selectedCategory === 'メイン' ? 'is-selected' : ''}
              onClick={() => foodCategoryClick('メイン')}
            >
              メイン
            </button>
            <button
              type='button'
              className={selectedCategory === 'サイド' ? 'is-selected' : ''}
              onClick={() => foodCategoryClick('サイド')}
            >
              サイド
            </button>
            <button
              type='button'
              className={selectedCategory === 'ドリンク' ? 'is-selected' : ''}
              onClick={() => foodCategoryClick('ドリンク')}
            >
              ドリンク
            </button>
          </ul>
        </div>
      </div>
      <FoodFooter />
    </>
  );
};

export default FoodList;
