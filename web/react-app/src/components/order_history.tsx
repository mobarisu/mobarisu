import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './order_history.css';
import {StoreHeader,StoreFooter} from './header_footer';

const OrderHistory: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  const orderHistoryData = [
    {
      selectedDate: '2023/06/05',
      shopNumber: 'AC',
      order: 53,
      historyMenu: [
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
      ],
    },
    {
      selectedDate: '2023/06/05',
      shopNumber: 'AC',
      order: 56,
      historyMenu: [
        {
          menuName: 'ソース',
          op: 'M',
          count: 2,
          menuPrice: 4000,
          subTotal: 0,
        },
        {
          menuName: 'いも虫を添えて',
          op: 'L',
          count: 1,
          menuPrice: 9000,
          subTotal: 0,
        },
        {
          menuName: 'サ',
          op: 'S',
          count: 3,
          menuPrice: 15000,
          subTotal: 0,
        },
      ],
    },
    {
      selectedDate: '2023/06/06',
      shopNumber: 'AC',
      order: 58,
      historyMenu: [
        {
          menuName: 'チャーハン',
          op: 'S',
          count: 1,
          menuPrice: 400,
          subTotal: 0,
        },
        {
          menuName: '天ぷら盛り合わせ',
          op: 'M',
          count: 3,
          menuPrice: 2000,
          subTotal: 0,
        },
        {
          menuName: 'ラクダ',
          op: 'XL',
          count: 8,
          menuPrice: 500,
          subTotal: 0,
        },
      ],
    },
    {
      selectedDate: '2023/06/05',
      shopNumber: 'AC',
      order: 67,
      historyMenu: [
        {
          menuName: 'ソース',
          op: 'M',
          count: 2,
          menuPrice: 4000,
          subTotal: 0,
        },
        {
          menuName: 'いも虫を添えて',
          op: 'L',
          count: 1,
          menuPrice: 9000,
          subTotal: 0,
        },
        {
          menuName: 'サ',
          op: 'S',
          count: 3,
          menuPrice: 15000,
          subTotal: 0,
        },
      ],
    },
    // Add more data sets here...
  ];

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleH2Click = (index: number) => {
    const currentIndexes = [...activeIndexes];
    const indexPosition = currentIndexes.indexOf(index);

    if (indexPosition !== -1) {
      // クリックされたインデックスが既にアクティブな場合は削除
      currentIndexes.splice(indexPosition, 1);
    } else {
      // クリックされたインデックスが非アクティブな場合は追加
      currentIndexes.push(index);
    }

    setActiveIndexes(currentIndexes);
  };

  const calculateTotalPrice = (historyMenu: any[]) => {
    let total = 0;
    historyMenu.forEach((item) => {
      total += item.subTotal;
    });
    return total;
  };

  const renderHistoryMenu = (historyMenu: any[]) => {
    return historyMenu.map((item, index) => {
      const subtotal = item.menuPrice * item.count;
      item.subTotal = subtotal;

      return (
        <div className="history_menu_list" key={index}>
          <h3 className="history_menu_name">{item.menuName}</h3>
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

  const filteredOrderHistoryData = orderHistoryData.filter(
    (orderData) => orderData.selectedDate === selectedDate
  );

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>注文履歴</title>
      </head>
      <StoreHeader />
      <body>
        <div className="history_date">
          <select className="history_select" value={selectedDate} onChange={handleDateChange}>
            <option value="">日付を選択</option>
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
        <div className="history">
          {selectedDate === '' ? (
            <p className="order_mess_p">日付を選択してください。</p>
          ) : filteredOrderHistoryData.length === 0 ? (
            <p className="order_mess_p">選択された日付の履歴はありません。</p>
          ) : (
            filteredOrderHistoryData.map((orderData, index) => (
              <div className="history_nav" key={index}>
                <div
                  className={`history_h2 ${activeIndexes.includes(index) ? 'active' : ''}`}
                  onClick={() => handleH2Click(index)}
                >
                  <h2>{orderData.shopNumber + orderData.order}</h2>
                </div>
                {activeIndexes.includes(index) && (
                  <div className="history_div active">
                    <div className="history_menu">{renderHistoryMenu(orderData.historyMenu)}</div>
                    <div className="history_price">
                      <p className="history_price_title">合計</p>
                      <h2>{calculateTotalPrice(orderData.historyMenu)}円</h2>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </body>
      <StoreFooter />
    </>
  );
};

export default OrderHistory;
