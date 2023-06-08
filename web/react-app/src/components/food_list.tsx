import React, { useState } from 'react';
import './food_list.css';
import storeimage from "./image/store-image.jpg"
import logo from "./image/logo.png"
import cart from "./image/cart.jpeg"
import food from "./image/food.jpg"

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('メイン');

  const foodCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>null</title>
    </head>
    <body>
        <header>
            <div className="header-logo">
                    <a href="./"><img src={logo} className="logo" alt=''/></a>
            </div>
            <div className="header-cart">
                <a href="./food_cart"><img src={cart} className="cart" alt='カート'/></a>
            </div>
        </header>
        <div className="store-image">
            <img src={storeimage} className="store-image" alt=''/>
            <h1>
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
                    <a href="./food_details"><img src={food} className="food" alt=''/>
                        <h2>
                            <p>焦がしネギ焼き鳥丼</p>
                            <p>1200円</p>
                        </h2>
                    </a>
                    <a href="./food_details"><img src={food} className="food" alt=''/>
                        <h2>
                            <p>焦がしネギ焼き鳥丼</p>
                            <p>1200円</p>
                        </h2>
                    </a>
                    <a href="./food_details"><img src={food} className="food" alt=''/>
                        <h2>
                            <p>焦がしネギ焼き鳥丼</p>
                            <p>1200円</p>
                        </h2>
                    </a>
                    <a href="./food_details"><img src={food} className="food" alt=''/>
                        <h2>
                            <p>焦がしネギ焼き鳥丼</p>
                            <p>1200円</p>
                        </h2>
                    </a>
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
    </body>
    </>
  );
};
 
export default App;
