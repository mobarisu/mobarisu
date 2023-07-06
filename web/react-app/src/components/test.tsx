import React, { useState } from 'react';
import './test.css';

const Test: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shopNumber = 'AC';
  const order = 53;

  const historyMenu = [
    {
      menuName: 'ぷりぷり赤エビの天ぷら～オニオンソースを添えて～',
      op: 'M',
      count: 2,
      menuPrice: 4000,
      subTotal: 0,
    },
    {
      menuName: 'いもむしの刺身盛り合わせ～寄生虫を添えて～',
      op: 'L',
      count: 1,
      menuPrice: 5000,
      subTotal: 0,
    },
    {
      menuName: 'サラダ',
      op: 'S',
      count: 3,
      menuPrice: 1500,
      subTotal: 0,
    },
  ];

  const handleH2Click = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const calculateTotalPrice = (historyMenu: any[]) => {
    let total = 0;
    historyMenu.forEach((menu) => {
      total += menu.subTotal;
    });
    return total;
  };

  return (
    <>
      <h2 className='test_h2' onClick={handleH2Click}>{shopNumber + order}</h2>
      {isMenuOpen && (
        <div className='test_d'>
          {historyMenu.map((menu, index) => (
            <div className="history_menu_list" key={index}>
              <h3 className="history_menu_name">{menu.menuName}</h3>
              <p className="history_p">サイズ：{menu.op}</p>
              <div className="history_menu_price">
            <p className="history_p">個数：{menu.count}</p>
            <h4 className="history_h4">{menu.menuPrice * menu.count}円</h4>
          </div>
            </div>
          ))}
        </div>
      )}
      <div className="history_price">
                      <p className="history_price_title">合計</p>
                      <h2>17500円</h2>
                    </div>
    </>
  );
};

export default Test;
