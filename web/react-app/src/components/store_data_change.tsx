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
    // validate(newValues, name);
  };
  const validate = (values: any, name: string) => {
    switch(name) {
        case 'storename':
          storenameValidation(values.storename);
          break;
          case 'name':
            nameValidation(values.name);
            break;
        case 'textarea':
          textareaValidation(values.textarea);
    }
  }
  const storenameValidation = (value: string): void => {
    // 128文字以内
    console.log(value +"::"+value.length)
    if(value.length < 129){
      // ok
    }else{
      // ng
    }
  }
  const nameValidation = (value: string): void => {
    // 128文字以内
    console.log(value +"::"+value.length)
    if(value.length < 129){
      // ok
    }else{
      // ng
    }
  }
  const textareaValidation = (value: string): void => {
    // 255文字以内
    console.log(value +"::"+value.length)
    if(value.length < 256){
      // ok
    }else{
      // ng
    }
  } 
  
  const clickSubmit = () => {
    // 一番下の登録ボタン
    var storename_error_none = document.getElementsByClassName("storename_error_none")[0] as HTMLInputElement;
    var storename_error_length = document.getElementsByClassName("storename_error_length")[0] as HTMLInputElement;
    var storename_ck = length_area_check(values["storename"].length,1,128);
    var name_error_none = document.getElementsByClassName("name_error_none")[0] as HTMLInputElement;
    var name_error_length = document.getElementsByClassName("name_error_length")[0] as HTMLInputElement;
    var name_ck = length_area_check(values["name"].length,1,128);
    var textarea_error_length = document.getElementsByClassName("textarea_error_length")[0] as HTMLInputElement;

    // エラーメッセージ非表示
    if(storename_ck == true){
      storename_error_none.style.display = "none";
      storename_error_length.style.display = "none";
    }
    if(name_ck == true){
      name_error_none.style.display = "none";
      name_error_length.style.display = "none";
    }
    if(values["textarea"].length < 256){
      textarea_error_length.style.display = "none";
    }
    if(storename_ck == true && name_ck == true && values["textarea"].length < 256){
      console.log("ok");
      // window.location.href = "/store_food_list";// 画面遷移
    }

    // エラーメッセージ表示
    if(storename_ck == "min"){
      storename_error_none.style.display = "block";
    }
    if(storename_ck === "max"){
      storename_error_length.style.display = "block";
    }
    if(name_ck == "min"){
      name_error_none.style.display = "block";
    }
    if(name_ck == "max"){
      name_error_length.style.display = "block";
    }
    if(values["textarea"].length >= 256){
      textarea_error_length.style.display = "block";
    }
  }
  const length_area_check = (e:number,min:number,max:number) =>{
    if(e >= min && e <= max){
      return true;
    }
    if(e < min){
      return "min";
    }
    if(e > max){
      return "max";
    }
}
  return (
    <div>
      <StoreHeader />
      <main>
        <div className='food_label'>
          <label htmlFor="name" className='lab_name'>店舗名</label><br/>
          <input type="text" id="name" onChange={handleChange('storename')} value={values.storename} required/>
          <div className='input_error'>
            <p className='storename_error_none'>※必須入力です。</p>
            <p className='storename_error_length'>※文字数が正しくありません。</p>
          </div>
        </div>
        <div className='food_label'>
          <label htmlFor="name2" className='lab_name'>店主名</label><br/>
          <input type="text" id="name2" onChange={handleChange('name')} value={values.name} required/>
          <div className='input_error'>
            <p className='name_error_none'>※必須入力です。</p>
            <p className='name_error_length'>※文字数が正しくありません。</p>
          </div>
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
          <div className='input_error'>
            <p className='textarea_error_length'>※文字数が正しくありません。</p>
          </div>
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
