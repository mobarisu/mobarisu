import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './food_list.css';
import storeimage from "./image/store-image.jpg"
import food from "./image/food.jpg"
import egg from '../images/01たまご.svg';
import milk from '../images/02牛乳.svg';
import rais from '../images/03小麦.svg';
import ebi from '../images/04えび.svg';
import {FoodHeader,FoodFooter} from './header_footer';


const FoodList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('メイン');
  const navigate = useNavigate();
  const location = useLocation();

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
      on_sale: true,
      allergies: [
        { name: 'たまご', image: egg},
        { name: '牛乳', image: milk},
        { name: '小麦', image: rais},
        { name: 'えび', image: ebi},
      ],
      foodsize: [
        { id: 1, size: 'SD', price: -400, selected: false },
        { id: 2, size: 'W', price: 0, selected: true },
        { id: 3, size: 'QQ', price: 980, selected: false },
        { id: 4, size: 'LL', price: 1980, selected: false },
      ],
    },
    {
      store_id: 'AC',
      product_id: 2,
      category_name: "メイン",
      product_name: "ネギ焼き鳥丼",
      product_price: 1200,
      on_sale: true,
      allergies: [
        { name: 'たまご', image: egg},
        { name: '牛乳', image: milk},
        { name: '小麦', image: rais},
      ],
      foodsize: [
        { id: 1, size: 'S', price: -500, selected: false },
        { id: 2, size: 'm', price: 0, selected: true },
        { id: 3, size: 'l', price: 80, selected: false },
      ],
    },
    {
      store_id: 'AC',
      product_id: 3,
      category_name: "サイド",
      product_name: "ポテトチップス",
      product_price: 500,
      on_sale: true,
      allergies: [
        { name: '小麦', image: rais},
        { name: 'えび', image: ebi},
      ],
      foodsize: [
        { id: 1, size: 'D', price: 8900, selected: false },
        { id: 2, size: 'W', price: 0, selected: true },
      ],
    },
    {
      store_id: 'AC',
      product_id: 4,
      category_name: "ドリンク",
      product_name: "タピオカミルクティー",
      product_price: 200,
      on_sale: true,
      allergies: [
        { name: 'たまご', image: egg},
        { name: '牛乳', image: milk},
        { name: '小麦', image: rais},
      ],
      foodsize: [
        { id: 1, size: 'SD', price: -400, selected: false },
        { id: 2, size: 'W', price: 0, selected: true },
        { id: 3, size: 'QQ', price: 980, selected: false },
        { id: 4, size: 'LL', price: 1980, selected: false },
      ],
    },
    {
      store_id: 'AC',
      product_id: 5,
      category_name: "ドリンク",
      product_name: "タピオカ黒糖ミルクティー",
      product_price: 250,
      on_sale: false,
      allergies: [
      ],
      foodsize: [
        { id: 1, size: 'SD', price: -400, selected: false },
        { id: 2, size: 'W', price: 0, selected: true },
        { id: 3, size: 'QQ', price: 980, selected: false },
        { id: 4, size: 'LL', price: 1980, selected: false },
      ],
    },
    {
      store_id: 'BC',
      product_id: 6,
      category_name: "ドリンク",
      product_name: "ミルクティー",
      product_price: 200,
      on_sale: true,
      allergies: [
        { name: 'たまご', image: egg},
        { name: '小麦', image: rais},
        { name: 'えび', image: ebi},
      ],
      foodsize: [
        { id: 1, size: 'SD', price: -400, selected: false },
        { id: 2, size: 'W', price: 0, selected: true },
        { id: 3, size: 'QQ', price: 980, selected: false },
      ],
    },
    {
      store_id: 'CC',
      product_id: 7,
      category_name: "ドリンク",
      product_name: "アイスコーヒー",
      product_price: 200,
      on_sale: true,
      allergies: [
        { name: 'たまご', image: egg},
        { name: '牛乳', image: milk},
        { name: 'えび', image: ebi},
      ],
      foodsize: [
        { id: 2, size: 'W', price: 0, selected: true },
        { id: 4, size: 'LL', price: 1980, selected: false },
      ],
    }
  ];

  const filteredMenu = dummyData.filter(item => item.store_id === 'AC' && item.category_name === selectedCategory);

  const DetailsSubmit = (item: any) => {
    navigate("/food_details", { state: { item } });
  };

  return (
    <>
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>商品一覧</title>
    </head>
        <FoodHeader />
        
        <div className="store-image">
            <img src={storeimage} className="store-image" alt=''/>
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
                    {filteredMenu.map(item => (
                      <a onClick={() => DetailsSubmit(item)} key={item.product_id}>
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