import React, {useState} from 'react';
import './css/App.css';
import {StoreHeader,StoreFooter} from './header_footer';

function StoreDataChange() {
  
  const [values, setValues] = useState({
    // 初期値
    storename: '',
    name: '',
    textarea: ''
  });
  const handleChange:(name: any) => (event: any) => void = (name) => (event)=>{
    const newValues = {
      ...values,
      [name]: event.target.value
    }
    setValues(newValues);
    validate(newValues, name);
  };
  const validate = (values: any, name: string) => {
    switch(name) {
        case 'storename':
          storenameValidation(values.name);
          break;
          case 'name':
            nameValidation(values.name);
            break;
        case 'textarea':
          textareaValidation(values.textarea);
    }
  }
  const storenameValidation = (value: string): void => {
    // console.log(value)
  }
  const nameValidation = (value: string): void => {
    // console.log(value)
  }
  const textareaValidation = (value: string): void => {
    // console.log(value)
  } 
  
  const clickSubmit = () => {
    // 一番下の登録ボタン
    console.log(values);
    // window.location.href = "/store_food_list";// 画面遷移
  }
  return (
    <div>
      <StoreHeader />
      <main>
        <div className='food_label'>
          <label htmlFor="name" className='lab_name'>店舗名</label><br/>
          <input type="text" id="name" onChange={handleChange('storename')} value={values.storename} required/>
        </div>
        <div className='food_label'>
          <label htmlFor="name2" className='lab_name'>店主名</label><br/>
          <input type="text" id="name2" onChange={handleChange('name')} value={values.name} required/>
        </div>
        <div className='food_label'>
          <label htmlFor="img" className='lab_name'>写真登録：<p className="file_name">画像が未選択です</p></label>
          <label htmlFor='img' className='lab_pop'>写真選択</label>
          <input type="file" id="img" onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
            const files = event.currentTarget.files;
            if (!files || files?.length === 0) return;
            const file = files[0];
            var filename = document.getElementsByClassName("file_name")[0];
            filename.textContent = file.name;
          }}/>
        </div>
        <div className='food_label'>
          <label htmlFor="Introduction" className='lab_name'>店舗紹介文</label><br/>
          <textarea id="Introduction" onChange={handleChange('textarea')} value={values.textarea}/>
        </div>
        <div className='btn_div food_label'>
        <input type="submit" onClick={clickSubmit} value={"変更"}/>
        </div>
      </main>
      <StoreFooter />
    </div>
    
  );
}

export default StoreDataChange;
