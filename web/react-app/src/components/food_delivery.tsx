import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './food_delivery.css';

const FoodDelivery: React.FC = () => {
  const navigate = useNavigate();

  const [orderDeliveryData, setOrderDeliveryData] = useState([
    {
      id:1,
      shopNumber: 'AC',
      order: 53,
      orderName: '田中クレジット真司',
      deliveryMenu: [
        {
          menuName: 'ぷりぷり赤エビの天ぷら～オニオンソースを添えて～',
          op: 'M',
          count: 2,
          menuPrice: 4000,
          completed: false,
        },
        {
          menuName: 'いもむしの刺身盛り合わせ～寄生虫を添えて～',
          count: 1,
          menuPrice: 5000,
          completed: false,
        },
        {
          menuName: 'サラダ',
          op: 'S',
          count: 3,
          menuPrice: 1500,
          completed: false,
        },
      ],
      showDeleteButton: false,
    },
    {
      id:2,
      shopNumber: 'AC',
      order: 58,
      orderName: '佐藤',
      deliveryMenu: [
        {
          menuName: 'チャーハン',
          op: 'S',
          count: 1,
          menuPrice: 400,
          completed: false,
        },
        {
          menuName: '天ぷら盛り合わせ',
          op: 'M',
          count: 3,
          menuPrice: 2000,
          completed: false,
        },
        {
          menuName: 'ラクダ',
          op: 'XL',
          count: 8,
          menuPrice: 500,
          completed: false,
        },
      ],
      showDeleteButton: false,
    },
    // 他のデータセットも追加...
  ]);

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

  const renderDeliveryMenu = (deliveryMenu: any[], dataIndex: number) => {
    const menuItems = deliveryMenu.map((item, itemIndex) => (
      <div className={`delivery_menu_list ${item.completed ? '' : 'hidden'}`} key={itemIndex}>
        <h3 className="delivery_menu_name">{item.menuName}</h3>
        <div className="del_cancel">
          <button className="del_cancel_btn">在庫切れ</button>
          <button className="del_cancel_btn">取消</button>
        </div>
        <div className="delivery_menu_op">
          <p className="delivery_p">サイズ：{item.op}</p>
          <br />
          <p className="delivery_p">個数：{item.count}</p>
        </div>
        <div className="delivery_menu_price">
          <button
            className={`delivery_sub_btn ${item.completed ? 'completed' : ''}`}
            onClick={() => {
              const updatedData = [...orderDeliveryData];
              updatedData[dataIndex].deliveryMenu[itemIndex].completed = !updatedData[dataIndex]
                .deliveryMenu[itemIndex].completed;
              setOrderDeliveryData(updatedData);
            }}
          >
            完成
          </button>
          <p className="delivery_sub_price">{item.menuPrice * item.count}円</p>
        </div>
      </div>
    ));

    return menuItems;
  };

  const handleDeliveryComplete = () => {
    if (activeIndex !== null) {
      const isAllCompleted = orderDeliveryData[activeIndex].deliveryMenu.every(
        (item) => item.completed
      );

      if (isAllCompleted) {
        const updatedData = [...orderDeliveryData];
        updatedData[activeIndex].showDeleteButton = true;
        setOrderDeliveryData(updatedData);
      } else {
        console.log('すべての商品が完成していません');
      }
    }
  };

  return (
    <>
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
                <div className={`delivery_menu ${item.showDeleteButton ? 'hidden' : ''}`}>
                  {renderDeliveryMenu(item.deliveryMenu, index)}
                </div>
                <div className="delivery_price">
                  <p className="delivery_price_title">合計</p>
                  <h2>{calculateTotalPrice(item.deliveryMenu)}円</h2>
                </div>
                <div className="delivery_complete">
                  {item.showDeleteButton && (
                    <button className={`delivery_cancel_btn ${item.showDeleteButton ? '' : 'hidden'}`}>取消</button>
                  )}
                  <button className="delivery_btn" onClick={handleDeliveryComplete}>
                    {item.showDeleteButton ? '受け渡し完了' : '商品完成'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodDelivery;
