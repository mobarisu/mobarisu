import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './store_data.css';

const StoreData: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleStoreNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(event.target.value);
  };

  const handleOwnerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerName(event.target.value);
  };

  const handleStoreDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = event.target.value;
    if (description.length <= 75) {
      setStoreDescription(description);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      if (selectedFile.size <= 8 * 1024 * 1024) {
        setFile(selectedFile);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (phoneNumber === "" || storeName === "" || ownerName === "" || storeDescription === "" || !file) {
      alert("全ての項目を入力してください。");
      return;
    }

    const phoneNumberRegex = /^(090|080|070|060)\d{8}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      alert("電話番号は090、080、070、060から始まる11桁の番号で入力してください。");
      return;
    }

    // 入力データをstore_food_listに保存する処理を追加する

    navigate("/store_food_list");
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>店舗情報登録</title>
      </head>
      <header>店舗情報</header>
      <body>
        <form onSubmit={handleSubmit}>
          <div className="store_">
            <div className="store_data">
              <label className='store_data_label'>電話番号</label><br />
              <div className="store_input">
                <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
              </div>
            </div>
            <div className="store_data">
              <label className='store_data_label'>店舗名</label><br />
              <div className="store_input">
                <input type="text" value={storeName} onChange={handleStoreNameChange} required />
              </div>
            </div>
            <div className="store_data">
              <label className='store_data_label'>店主名</label><br />
              <div className="store_input">
                <input type="text" value={ownerName} onChange={handleOwnerNameChange} required />
              </div>
            </div>
            <div className="store_data">
              <label className='store_data_label'>店舗写真登録</label><br />
              <div className="store_input">
                <input type="file" accept="image/*" onChange={handleFileChange} required />
              </div>
            </div>
            <div className="store_data">
              <label className='store_data_label'>店舗紹介文</label><br />
              <textarea value={storeDescription} onChange={handleStoreDescriptionChange} maxLength={75}></textarea>
            </div>
            <div className="btn">
              <button type="submit" className="btn_" id="submit-btn">
                登録
              </button>
            </div>
          </div>
        </form>
      </body>
    </>
  );
};

export default StoreData;
