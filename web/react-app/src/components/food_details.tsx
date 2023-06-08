import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './food_details.css';
import logo from '../images/焦がしねぎ焼き鳥丼詳細.jpg';
import egg from '../images/01たまご.svg';
import milk from '../images/02牛乳.svg';
import rais from '../images/03小麦.svg';
import ebi from '../images/04えび.svg';

interface FoodSize {
  id: number;
  size: string;
  price: number;
}

interface Count{
    id: number;
    count: number;
}

const FoodDetails: React.FC = () => {
  const navigate = useNavigate();
  const [activedeta, setActiveIndex] = useState<number | null>(null);
  const optionhand = (index: number) => {
    setActiveIndex(index === activedeta ? null : index);
  };

  const [allergies] = useState([
    { name: 'たまご', image: egg },
    { name: '牛乳', image: milk },
    { name: '小麦', image: rais },
    { name: 'えび', image: ebi },
  ]);

  const [foodsize] = useState<FoodSize[]>([
    { id: 1, size: 'S', price: -100 },
    { id: 2, size: 'M', price: 0 },
    { id: 3, size: 'L', price: 100 },
  ]);

  const [countup, setCount] = useState<Count[]>([
    { id: 1, count: 1 }
  ]);

  const increment = (id: number) => {
    const updatecount = countup.map(item => {
      if (item.id === id && item.count < 20) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCount(updatecount);
  };

  const decrement = (id: number) => {
    const updatecount = countup.map(item => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCount(updatecount);
  };

//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     { id: 1, size: 'M', count: 1 },
//   ]);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [maney, setManey] = useState<number>(1000);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSize = event.target.value;
    const selectedSizeObject = foodsize.find((size) => size.size === selectedSize);

    if (selectedSizeObject) {
      let newManey = 1000; // 初期値に戻す
      if (selectedSizeObject.price > 0) {
        newManey += selectedSizeObject.price;
      } else if (selectedSizeObject.price < 0) {
        newManey -= Math.abs(selectedSizeObject.price);
      }
      setManey(newManey);
    }

    setSelectedSize(selectedSize);
  };

  const nn = logo;
  const ils_name = '焦がしねぎ焼き鳥丼';
  const explanation =
    'ねぎを焦がすことで風味豊かな香りと濃いめの醤油ベースのにんにくだれが焦がしねぎに絡みあって、ご飯がすすみます。';

  return (
    <>
      <title>商品詳細画面</title>
      <body>
        <div className="details_full">
          <div className="details_hed">
            <div className="dt_bc">
              <h1 className="back_details">⇚</h1>
            </div>
            <h1 className="de_mj">商品選択</h1>
          </div>

          <div className="top_image">
            <img className="deta_img" src={nn} alt="焦がしねぎ焼き鳥丼詳細" />
          </div>
          <div className="food_content">
            <label htmlFor="name">{ils_name}</label>
            <p className="deta_cot">{explanation}</p>
          </div>
          <div className="deta_allergy">
            <label className="ale" htmlFor="ale">
              アレルギー
            </label>
          </div>
          <div className="allergy_font">
            {allergies.map((allergy, index) => (
              <div className="allergy_iti" key={index}>
                <img className="allergy_size" src={allergy.image} alt="" />
                <p className="allergy_name">{allergy.name}</p>
              </div>
            ))}
          </div>

          <div className="deta_option">
            <label htmlFor="option">オプション</label>
            <div className="option_puru">
              <div className="option_tenkai">
                <h2
                  className={`deta_dawn active${activedeta === 0 ? 'active' : ''}`}
                  onClick={() => optionhand(0)}
                >
                  サイズ: {selectedSize ? selectedSize : 'M'}
                </h2>
                {activedeta === 0 && (
                  <div className="ragio_size">
                    {foodsize.map((size) => (
                      <label className="radio_tate" key={size.id}>
                        <input
                          className="sukima"
                          type="radio"
                          value={size.size}
                          checked={selectedSize === size.size}
                          onChange={handleSizeChange}
                        />
                        {size.size} ({size.price >= 0 ? '+' : ''}{size.price})
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <p>{maney}</p>
          </div>

          {countup.map((item) => (
  <div className="count_sazi" key={item.id}>
    <div className="count_fl">
      <button className="btn_am" onClick={() => decrement(item.id)}>
        －
      </button>
      <p className="food_caunt">{item.count}</p>
      <button className="btn_pm" onClick={() => increment(item.id)}>
        ＋
      </button>
    </div>
  </div>
))}


          <div className="nihow">
            <button className="btn_details" onClick={() => navigate('/food_list')}>
              カートに入れる
            </button>
          </div>
          <div>
            <button className="btn_details3" onClick={() => navigate('/food_cart')}>
              注文を続ける
            </button>
          </div>
          </div>
      </body>
    </>
  );
};

export default FoodDetails;