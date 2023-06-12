import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './css/App.css';

function FoodRegistration() {
  const navigate = useNavigate();

  // ポップアップの×と登録ボタンにクリックイベントを付与(最初の２行分のみ)
  const SizeClick = () =>{
    checkOnOff();
    // var sizebatu = document.getElementsByClassName('size_batu');
    // var linein = document.getElementsByClassName('line_in')[0];
    var close = document.getElementsByClassName("close")[0];
    // for(var i=0; i<sizebatu.length; i++){
    //   sizebatu[i].addEventListener('click',function(this:any){
    //     DeleteLine(this);
    //   });
    // }
    // linein.addEventListener('click',function(){
    //   addLine();
    // });
    close.addEventListener('click',function(){
      checkOnOff();
    });
  }
  // Line削除
  const DeleteLine = (e:any) =>{
    var sizeLine = document.getElementsByClassName("size_line");
    var cnt = sizeLine.length;
    if(cnt-1 >= 1){
      var batu = e.target;
      var parent = batu.parentNode;
      var children = parent.children;;
      for(var i=children.length-1; i>=0; i--){
        children[i].remove();
      }
      parent.remove();
    }
    if(cnt-1 == 1){
      var line = document.getElementsByClassName("size_line")[0];
      var target = document.getElementsByClassName("size_batu")[0];
      var pop = document.getElementsByClassName("pop_txt")[0];
      target.remove();
      var a = document.createElement("a");
      a.setAttribute("class","size_batu");
      a.appendChild(document.createTextNode("　"));
      line.insertBefore(a,pop);
    }
  }

  // Line追加
  const addLine = () =>{
    var sizeLine = document.getElementsByClassName("size_line");
    var cnt = sizeLine.length;

    var area = document.getElementsByClassName("line_area")[0];
    var div = document.createElement("div");
    div.setAttribute("class","size_line");

    var a = document.createElement("a");
    a.setAttribute("class","size_batu");
    a.setAttribute("href","javascript:void(0);");
    a.addEventListener("click",DeleteLine);
    if(cnt == 1){
      var sizeBatu = document.getElementsByClassName("size_batu")[0];
      sizeBatu.setAttribute("href","javascript:void(0);");
      sizeBatu.addEventListener("click",DeleteLine);  
      sizeBatu.textContent="×";
      a.appendChild(document.createTextNode("×"));
    }else{
      a.appendChild(document.createTextNode("×"));
    }
    
    div.appendChild(a);

    var input1 = document.createElement("input");
    input1.className="pop_txt";
    input1.type="text";
    div.appendChild(input1);

    var input2 = document.createElement("input");
    input2.className="pop_txt";
    input2.type="number";
    div.appendChild(input2);

    var p = document.createElement("p");
    p.className="en";
    p.appendChild(document.createTextNode("円"));
    div.appendChild(p);

    area.append(div);
  }

  const [values, setValues] = useState({
    name: '',
    number: '',
    select: 'main',
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
        case 'name':
          nameValidation(values.name);
          break;
        case 'number':
          numberValidation(values.number);
          break;
        case 'select':
          selectValidation(values.select);
          break;
        case 'textarea':
          textareaValidation(values.textarea);
    }
  }
  const nameValidation = (value: string): void => {
    // console.log(value)
  }
  const numberValidation = (value: number): void => {
    // console.log(value)
  }
  const selectValidation = (value: string): void => {
    // console.log(value)
  } 
  const textareaValidation = (value: string): void => {
    // console.log(value)
  } 

  const inputSize = () =>{
    // ポップアップの入力されたデータを取得する
    var optionlist: {[key: string]: number;}={};
    var sizes = document.getElementsByClassName("pop_txt");
    var sizeval;
    var priceval;
    for(var i=0; i<sizes.length; i+=2){
      var size = sizes[i] as HTMLInputElement;
      sizeval = String(size.value);
      if(sizeval.length >= 1 && sizeval.length < 256){
        // サイズの入力が1文字以上256文字未満
        // ok
        var price = sizes[i+1] as HTMLInputElement;
        priceval = Number(price.value);
        if(!(isNaN(priceval))){
          // 値段が数値で入力
          // ok
          optionlist[sizeval] = priceval;// sizevalが同じ物は追加できず、pricevalが上書きされる
        }else{
          // 値段が数値でない
          // ng
        }
      }else{
        // サイズの入力可能文字数を満たしていない
        // ng
      }
    }
    
    var len = Object.keys(optionlist).length;
    var sizekey = Object.keys(optionlist);
    var numbervalue = Object.values(optionlist);
    var lookarea = document.getElementsByClassName("option_look")[0];
    var target = lookarea.children;
    if(!(target.length == 0)){
      for(var x=target.length-1; x>=0; x--){
        target[x].remove();
      }
    }
    for(var j=0; j<=len-1; j++){
      var optline = document.createElement("pre");
      optline.className="opt_list";
      optline.appendChild(document.createTextNode("サイズ："+ sizekey[j] + "   " +"値段："+ numbervalue[j]+"円"));
      lookarea?.appendChild(optline);
      // lookarea.innerHTML='<pre class="opt_list">サイズ：'+sizekey[j]+'   '+'値段：'+numbervalue[j]+'</pre>';
    }
    console.log(optionlist);
    checkOnOff();
  }

  const checkOnOff = () =>{
    var check = document.getElementById("pop-up") as HTMLInputElement;
    if(check.checked == false){
      // クリックされたのでoverlayとwindowを表示する
      var overlay = document.getElementsByClassName("overlay")[0] as HTMLInputElement;
      var window = document.getElementsByClassName("window")[0] as HTMLInputElement;
      overlay.style.display = "block";
      window.style.display = "block";
    }else{
      // クリックされたのでoverlayとwindowを非表示する
      var overlay = document.getElementsByClassName("overlay")[0] as HTMLInputElement;
      var window = document.getElementsByClassName("window")[0] as HTMLInputElement;
      overlay.style.display = "none";
      window.style.display = "none";
    }
  }

  const clickSubmit = () => {
    // 一番下の登録ボタン
    console.log(values);
    // window.location.href = "/store_food_list";// 画面遷移
  }
  return (
    <div>
      <header>
        <h1>商品登録</h1>
      </header>
      <main>
        <div className='food_label'>
          <label htmlFor="name" className='lab_name'>商品名</label><br/>
          <input type="text" id="name" className="data_in" onChange={handleChange('name')} value={values.name} required/>
        </div>
        <div className='food_label'>
          <label htmlFor="number" className='lab_name'>値段</label><br/>
          <input type="number" id="number" className="data_in" onChange={handleChange('number')} value={values.number} required/>
        </div>
        <div className='food_label'>
          <label htmlFor='kubun' className='lab_name'>区分</label><br/>
          <select name='kubun' onChange={handleChange('select')} value={values.select} required>
            <option value="main" label="メイン" selected></option>
            <option value="side" label="サイド"></option>
            <option value="drink" label="ドリンク"></option>
          </select>
        </div>
        <div className='food_label'>
          <label htmlFor="foodExplanation" className='lab_name'>説明</label><br/>
          <textarea id="foodExplanation" onChange={handleChange('textarea')} value={values.textarea}/>
        </div>
        <div className='food_label'>
          <label htmlFor="allergy" className='lab_name'>アレルギー項目</label><br/>
          <label htmlFor="allergy" className='lab_pop'>アレルギー追加</label>
          <input type="file" id="allergy"/>
        </div>
        <div className='food_label'>
          <label htmlFor='pop-up' className='lab_name open'>オプション</label><br/>
          <label htmlFor='pop-up' className='lab_pop open' onClick={SizeClick}>サイズ追加</label>
          <input type="checkbox" id="pop-up"/>
          <div className="overlay">
            <div className="window">
              <div className='pop_batu'>
                <label className="close" htmlFor="pop-up">×</label>
              </div>
              <div className='food_r_pop'>
                <label className='food_r_pop_size'>サイズ</label>
                <label className='food_r_pop_price'>値段</label>
              </div>
              <div className="line_area">
                <div className='size_line'>
                  <a href="javascript:void(0);" className='size_batu' onClick={DeleteLine}>×</a>
                  <input className='pop_txt' type="text"/>
                  <input className='pop_txt' type="number"/><p className='en'>円</p>
                </div>
                <div className='size_line'>
                  <a href="javascript:void(0);" className='size_batu' onClick={DeleteLine}>×</a>
                  <input className='pop_txt' type="text"/>
                  <input className='pop_txt' type="number"/><p className='en'>円</p>
                </div>
              </div>
              <div className='line_plus'>
                <a href="javascript:void(0);"  className='line_in' onClick={addLine}>＋サイズを追加</a>
              </div>
              <div className='btn_area'>
                <button className='btn_in' onClick={inputSize}>登録</button> 
              </div>
            </div>
          </div>
          <div className='option_look'></div>
        </div>
        <div className='food_label'>
          <label htmlFor="img" className='lab_name'>商品画像：<p className="file_name">画像が未選択です</p></label>
          <label htmlFor="img" className='lab_pop'>商品画像追加</label>
          <input type="file" id="img" onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
            const files = event.currentTarget.files;
            if (!files || files?.length === 0) return;
            const file = files[0];
            var filename = document.getElementsByClassName("file_name")[0];
            filename.textContent = file.name;
          }}/>
        </div>
        <div className='btn_div food_label'>
          {/* <input type="submit" onClick={()=> navigate('/store_food_list')} value={"登録"}/> */}
          <input type="submit" onClick={clickSubmit} value={"登録"}/>
        </div>
      </main>
    </div>
  );
}

export default FoodRegistration;
