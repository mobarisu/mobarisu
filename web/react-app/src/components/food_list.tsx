import React, { useState } from 'react';
import './food_list.css';
import storeimage from "./image/store-image.jpg"
import food from "./image/food.jpg"
import {FoodHeader,FoodFooter} from './header_footer';


const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('メイン');

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
    {
      store_id: 'AC',
      product_id: 3,
      category_name: "サイド",
      product_name: "ポテトチップス",
      product_price: 500,
      on_sale: true
    },
    {
      store_id: 'AC',
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
      product_name: "タピオカ黒糖ミルクティー",
      product_price: 250,
      on_sale: false
    },
    {
      store_id: 'BC',
      product_id: 6,
      category_name: "ドリンク",
      product_name: "ミルクティー",
      product_price: 200,
      on_sale: true
    },
    {
      store_id: 'CC',
      product_id: 7,
      category_name: "ドリンク",
      product_name: "アイスコーヒー",
      product_price: 200,
      on_sale: true
    }
  ];

  const filteredMenu = dummyData.filter(item => item.store_id === 'AC' && item.category_name === selectedCategory);

  return (
    <>
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>null</title>
    </head>
    <body>
        {/* <header className='header_ac_on'>
            <div className="header-logo">
                    <a href="./"><img src={logo} className="logo" alt=''/></a>
            </div>
            <div className="header-cart">
                <a href="./food_cart"><img src={cart} className="cart" alt='カート'/></a>
            </div>
        </header> */}
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
                      <a href="./food_details" key={item.product_id}>
                        <img src={food} className="food" alt=''/>
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
        {/* <footer>
            <div className="footer-nav">
                <ul className='footer-nav-item'>
                    <li><a href="food_cart">カート</a></li>
                    <li><a href="faq">よくある質問</a></li>
                    <li><a href="#">利用規約</a></li>
                    <li><a href="#">プライバシーポリシー</a></li>
                </ul>
            </div>
            <p className="copyright">&copy&#058;2023 mobarisu Corp.</p>
        </footer> */}
        <FoodFooter />
    </body>
    </>
  );
};
 
export default App;
