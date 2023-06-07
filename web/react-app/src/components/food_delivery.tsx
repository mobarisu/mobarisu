import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './food_delivery.css';

const FoodDelivery: React.FC = () => {
  const navigate = useNavigate();

  const orderDeliveryData = [
    {
      shopNumber: 'AC',
      order: 53,
      orderName: '田中クレジット真司',
      deliveryMenu: [
        {
          menuName: 'ぷりぷり赤エビの天ぷら～オニオンソースを添えて～',
          op: 'M',
          count: 2,
          menuPrice: 4000,
        },
        {
          menuName: 'いもむしの刺身盛り合わせ～寄生虫を添えて～',
          count: 1,
          menuPrice: 5000,
        },
        {
          menuName: 'サラダ',
          op: 'S',
          count: 3,
          menuPrice: 1500,
        },
      ],
    },
    {
      shopNumber: 'AC',
      order: 58,
      orderName: '佐藤',
      deliveryMenu: [
        {
          menuName: 'チャーハン',
          op: 'S',
          count: 1,
          menuPrice: 400,
        },
        {
          menuName: '天ぷら盛り合わせ',
          op: 'M',
          count: 3,
          menuPrice: 2000,
        },
        {
          menuName: 'ラクダ',
          op: 'XL',
          count: 8,
          menuPrice: 500,
        },
      ],
    },
    // Add more data sets here...
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleH2Click = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const calculateTotalPrice = (deliveryMenu: any[]) => {
    let total = 0;
    deliveryMenu.forEach((item) => {
      total += item.menuPrice * item.count;
    });
    return total;
  };

  const renderDeliveryMenu = (deliveryMenu: any[]) => {
    const menuItems = deliveryMenu.flatMap((item, index) =>

        <div className="delivery_menu_list" key={index}>
          <h3 className="delivery_menu_name">{item.menuName}</h3>
          <div className="del_cancel">
            <button className="del_cancel_btn">在庫切れ</button>
            <button className="del_cancel_btn">取消</button>
          </div>
          <div className="delivery_menu_op">
            <p className="delivery_p">サイズ：{item.op}</p><br />
            <p className="delivery_p">個数：{item.count}</p>
          </div>
          
          <div className="delivery_menu_price">
            <button className="delivery_sub_btn">完成</button>
            <p className="delivery_sub_price">{item.menuPrice*item.count}円</p>
          </div>
        </div>
      
    );

    return menuItems;
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>注文受け取り</title>
      </head>
      <body>
        <div className="delivery">
          {orderDeliveryData.map((item, index) => (
            <div className="delivery_nav" key={index}>
              <div
                className={`delivery_h2 ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleH2Click(index)}
              >
                <h2>{item.shopNumber + item.order}</h2>
                <h2 className="delivery_name">{item.orderName}</h2>
              </div>
              {activeIndex === index && (
                <div className="delivery_div active">
                  <div className="delivery_menu">{renderDeliveryMenu(item.deliveryMenu)}</div>
                  <div className="delivery_price">
                    <p className="delivery_price_title">合計</p>
                    <h2>{calculateTotalPrice(item.deliveryMenu)}円</h2>
                  </div>
                  <div className="delivery_complete">
                  <button className="delivery_cancel_btn">削除</button>
                  <button className="delivery_btn">商品完成</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </body>
    </>
  );
};

export default FoodDelivery;