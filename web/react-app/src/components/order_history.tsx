import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './order_history.css';

const OrderHistory: React.FC = () => { 
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const ShopNumber = "AC";
  const Order = 53;
  const Ordername ="田中クレジット真司";

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
    // ここで選択された日付に基づいてデータを取得し、表示する処理を実行します
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleH2Click = (index: number) => {
      setActiveIndex(index === activeIndex ? null : index);
  };
  let totalPrice = 0;

  const history_menu = [
    {
      MenuName: "ぷりぷり赤エビの天ぷら～オニオンソースを添えて～",
      op: "M",
      count: 2,
      MenuPrice: 4000,
      SubTotal: 0
    },
    {
      MenuName: "いもむしの刺身盛り合わせ～寄生虫を添えて～",
      op: "L",
      count: 1,
      MenuPrice: 5000,
      SubTotal: 0
    },
    {
      MenuName: "サラダ",
      op: "S",
      count: 3,
      MenuPrice: 1500,
      SubTotal: 0
    }
  ];

  const calculateTotalPrice = () => {
    let total = 0;
    history_menu.forEach((item) => {
      total += item.SubTotal;
    });
    return total;
  };



  const renderHistoryMenu = () => {
    return history_menu.map((item, index) => {
      const subtotal = item.MenuPrice * item.count;
      item.SubTotal = subtotal;
      totalPrice += subtotal;

      return (
        <div className="history_menu_list" key={index}>
          <h3 className="history_menu_name">{item.MenuName}</h3>
          <div className="history_menu_op">
            <p className="history_p">サイズ：{item.op}</p>
          </div>
          <div className="history_menu_price">
            <p className="history_p">個数：{item.count}</p>
            <h4 className="history_h4">{subtotal}円</h4>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>注文履歴</title>
      </head>
      <header>注文履歴</header>
      <body>
        <div className="history_date">
          <select className='history_select' value={selectedDate} onChange={handleDateChange}>
            <option value="">日付を選択</option>
            {/* 過去1カ月分の日付を生成 */}
            {Array.from({ length: 30 }, (_, index) => {
              const date = new Date();
              date.setDate(date.getDate() - index);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, '0');
              const day = String(date.getDate()).padStart(2, '0');
              const formattedDate = `${year}/${month}/${day}`;

              return (
                <option key={formattedDate} value={formattedDate}>
                  {formattedDate}
                </option>
              );
            })}
          </select>
        </div>
        {/* 選択された日付に基づいてデータを表示する要素を追加 */}
        <div className="history">
                <div className="history_nav">
                    <div className={`history_h2 ${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => handleH2Click(0)}
                    >
                    <h2>
                        {ShopNumber + Order}
                    </h2>
                    <h2 className="history_name">
                        {Ordername}
                    </h2>
                    </div>
                    {activeIndex === 0 && (
            <div className="history_div active">
          <div className="history_menu">{renderHistoryMenu()}</div>
          <div className="history_price">
          <p className="history_price_title">合計</p>
          <h2>{calculateTotalPrice()}円</h2>
        </div>
        </div>
                )}
                </div>
                <div className="history_nav">
                
                </div>
            </div>
      </body>
    </>
  );
};

export default OrderHistory;
