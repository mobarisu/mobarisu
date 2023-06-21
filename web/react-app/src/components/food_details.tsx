import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './food_details.css';
import logo from '../images/焦がしねぎ焼き鳥丼詳細.jpg';
import egg from '../images/01たまご.svg';
import milk from '../images/02牛乳.svg';
import rais from '../images/03小麦.svg';
import ebi from '../images/04えび.svg';
import {FoodHeader,FoodFooter} from './header_footer';



interface FoodSize {
  id: number;
  size: string;
  price: number;
}

interface Count {
  id: number;
  count: number;
}

const FoodDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [foodName, setFoodName] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [price, setPrice] = useState(0);

  const [activedeta, setActiveIndex] = useState<number | null>(null);
  const optionhand = (index: number) => {
    setActiveIndex(index === activedeta ? null : index);
  };

  useEffect(() => {
    const data = new URLSearchParams(location.search);
    const foodName = data.get('food_name');
    const price = parseInt(data.get('price') || '0');

    setFoodName(foodName || '');
    setPrice(price);
  }, []);

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

  const [countup, setCount] = useState<Count[]>([{ id: 1, count: 1 }]);

  const increment = (id: number) => {
    const updatecount = countup.map((item) => {
      if (item.id === id && item.count < 20) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCount(updatecount);
  };

  const decrement = (id: number) => {
    const updatecount = countup.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCount(updatecount);
  };

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

  const ils_name = '焦がしねぎ焼き鳥丼';
  const explanation = '香ばしく焼き上げた鶏肉に、たっぷりのねぎと濃厚なタレが絡み合う一品です。';

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const searchParams = new URLSearchParams();
    searchParams.set('size', selectedSize ? selectedSize : 'M');
    searchParams.set('ils_name', ils_name);
    searchParams.set('maney', maney.toString());
    searchParams.set('count', JSON.stringify(countup));

    navigate(`/food_cart?${searchParams.toString()}`);
  };


  return (
    <>
         <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>商品詳細画面</title>
    </head>
      <FoodHeader />
      <body>
        <div className="details_full">
          <div className="details_hed">
            <div className="dt_bc">
              <span className="back_details" onClick={() => navigate(-1)}></span>
            </div>
            <h1 className="de_mj">商品選択</h1>
          </div>

          <div className="top_image">
            <img className="deta_img" src={logo} alt="焦がしねぎ焼き鳥丼詳細" />
          </div>
          <div className="food_content">
            <label className="details_food_name" htmlFor="name">
              {ils_name}
            </label>
            <p className="deta_cot">{explanation}</p>
          </div>

          <div className="deta_option">
            <label className="deta_option_name" htmlFor="option">
              オプション選択
            </label>
            <div className="option_puru">
              <h2 className={`deta_dawn active${activedeta === 0 ? 'active' : ''}`} onClick={() => optionhand(0)}>
                サイズ: {selectedSize ? selectedSize : 'M'}
              </h2>
            </div>
            {activedeta === 0 && (
              <div className="ragio_size">
                {foodsize.map((size) => (
                  <label className="radio_tate" key={size.id}>
                    <div className="ragio_sk">
                      <input
                        className="sukima"
                        type="radio"
                        value={size.size}
                        checked={selectedSize === size.size}
                        onChange={handleSizeChange}
                      />
                    </div>
                    <div className="price_yoko">
                      {size.size}
                      <div className="right_side">
                        {size.price >= 0 ? '+' : ''}
                        {size.price}円
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="details_syou">
            <p className="maney_deta">{maney}円</p>
          </div>
          {countup.map((item) => (
            <div className="details_sazi" key={item.id}>
              <div className="details_fl">
                <button className="btn_mai btn_pm1" onClick={() => decrement(item.id)}>
                  －
                </button>
                <p className="food_caunt">{item.count}</p>
                <button className="btn_pura btn_pm1" onClick={() => increment(item.id)}>
                  ＋
                </button>
              </div>
            </div>
          ))}

            <div className='details_space'>
          <div className="details_btn_full">
            <button className="details_cart btn_details" onClick={handleSubmit}>
              カートに入れる
            </button>
            </div>
            <div className='details_btn_full'>
            <button className="details_list btn_details" onClick={handleSubmit}>
              注文をする
            </button>
            </div>
          </div>
        </div>
        <FoodFooter />
      </body>
      
    </>
  );
};

export default FoodDetails;
