import React from 'react';
import { useNavigate } from "react-router-dom";
import './store_data.css';

const StoreData: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
          <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>メールアドレス確認</title>
      </head>
      <header>メールアドレス確認</header>
      <body>
        
      </body>
        </>
    );
};

export default StoreData;