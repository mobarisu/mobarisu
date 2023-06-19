import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './css/App.css';
import egg from "./image/01たまご (1).svg";
import milk from "./image/02牛乳.svg";
import wheat from "./image/03小麦.svg";
import Shrimp from "./image/04えび.svg";
import Crab from "./image/05かに.svg";
import Soba from "./image/06そば.svg";
import peanut from "./image/07落花生.svg";
import Abalone from "./image/08あわび.svg";
import squid from "./image/09いか.svg";
import ikura from "./image/10いくら.svg";
import Salmon from "./image/11さけ.svg";
import mackerel from "./image/12さば.svg";
import almond from "./image/14アーモンド.svg";
import orange from "./image/15オレンジ.svg";
import cashew_nuts from "./image/16カシューナッツ.svg";
import kiwi from "./image/17キウイ.svg";
import beef from "./image/18牛肉.svg";
import walnut from "./image/19クルミ.svg";
import Gum from "./image/20ゴマ.svg";
import soy from "./image/21大豆.svg";
import chicken_meat from "./image/22鶏肉.svg";
import banana from "./image/23バナナ.svg";
import pork from "./image/24豚肉.svg";
import Matsutake from "./image/25まつたけ.svg";
import Peaches from "./image/26もも.svg";
import Yamaimo from "./image/27やまいも.svg";
import apple from "./image/28りんご.svg";
import {StoreHeader,StoreFooter} from './header_footer';

function FoodRegistration() {
  const navigate = useNavigate();

  // ポップアップの×と登録ボタンにクリックイベントを付与(最初の２行分のみ)
  const SizeClick = (e:any) =>{
    var target = e.target;
    var parent = target.parentNode;
    var overlay = parent.children[4];
    var window = overlay.children[0];
    var close = window.children[0].children[0];
    // overlay.style.display = "block";
    // window.style.display = "block";
    checkOnOff(target);

    // var close = document.getElementsByClassName("close")[0];
    close.addEventListener('click',function(){
      checkOnOff(target);
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

  const inputSize = (e:any) =>{
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

    var target2 = e.target.parentNode; 
    var window = target2.parentNode;
    var overlay = window.parentNode;
    var food_label = overlay.parentNode;
    var ckbox = food_label.children[3];
    ckbox.checked =false;
    overlay.style.display = "none";
    window.style.display = "none";
  }

  const checkOnOff = (e:any) =>{
    var target = e;
    var parent = target.parentNode;
    var ckbox = parent.children[3];
    var overlay = parent.children[4];
    var window = overlay.children[0];
    if(ckbox.checked == false){
      overlay.style.display = "block";
      window.style.display = "block";
    }else{
      overlay.style.display = "none";
      window.style.display = "none";
    }
  }

  const allergyClick = (e:any) =>{
    var target = e.target;
    var area = target.closest( ".allergy_ingredients" );
    var check = area.children[0];
    if(check.checked == false){
      area.style.background = "#f0f8ff";
    }else{
      area.style.background = "#ffffff";
    }
  }

  const inputAllergy = (e:any) => {
    var target = e.target;
    var btnArea = target.parentNode;
    var window = btnArea.parentNode;
    var overlay = window.parentNode;
    var ckbox = document.getElementById("allergy") as HTMLInputElement;
    if(ckbox.checked == false){
      overlay.style.display = "block";
      window.style.display = "block";
    }else{
      var allergylist: {[key: number]: any;}={};
      var allergycheck = document.getElementsByClassName("allergy_check");
      var imgs = document.getElementsByTagName("img");
      for(var i=0; i<allergycheck.length; i++){
        var ck = allergycheck[i] as HTMLInputElement;
        if(ck.checked == true){
          var img_alt = imgs[i].alt;
          allergylist[i] = img_alt;
        }
      }
      console.log(allergylist);
      overlay.style.display = "none";
      window.style.display = "none";
      var lookarea = document.getElementsByClassName("allergy_look")[0];
      var len = Object.keys(allergylist).length;
      var area = lookarea.children;
      if(!(area.length == 0)){
        for(var x=area.length-1; x>=0; x--){
          area[x].remove();
        }
      }
      for(var j=0; j<len; j++){
        var line = document.createElement("pre");
        var inImg = imgs[j];
        line.className="alle_list";
        line.appendChild(inImg);
        lookarea.appendChild(line);
      }
    }
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
          <label htmlFor="allergy" className='lab_name open'>アレルギー項目</label><br/>
          <label htmlFor="allergy" className='lab_pop open' onClick={SizeClick}>アレルギー追加</label>
          {/* <input type="file" id="allergy"/> */}
          <input type="checkbox" id="allergy"/>
          <div className='overlay'>
            <div className="window">
              <div className='pop_batu'>
                <label className="close" htmlFor="allergy">×</label>
              </div>
              <div className='area_test'>
                <div className='allergy_list'>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="egg" className='allergy_check'/>
                      <label htmlFor='egg' className='ingredients' onClick={allergyClick}><img src={egg} alt="egg" /></label><br/>
                      <label htmlFor='egg' className='ingredients' onClick={allergyClick}>たまご</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="milk" className='allergy_check'/>
                      <label htmlFor='milk' className='ingredients' onClick={allergyClick}><img src={milk} alt="milk" /></label><br/>
                      <label htmlFor='milk' className='ingredients' onClick={allergyClick}>牛乳</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="wheat" className='allergy_check'/>
                      <label htmlFor='wheat' className='ingredients' onClick={allergyClick}><img src={wheat} alt="wheat" /></label><br/>
                      <label htmlFor='wheat' className='ingredients' onClick={allergyClick}>小麦</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Shrimp" className='allergy_check'/>
                      <label htmlFor='Shrimp' className='ingredients' onClick={allergyClick}><img src={Shrimp} alt="Shrimp" /></label><br/>
                      <label htmlFor='Shrimp' className='ingredients' onClick={allergyClick}>えび</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Crab" className='allergy_check'/>
                      <label htmlFor='Crab' className='ingredients' onClick={allergyClick}><img src={Crab} alt="Crab" /></label><br/>
                      <label htmlFor='Crab' className='ingredients' onClick={allergyClick}>かに</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Soba" className='allergy_check'/>
                      <label htmlFor='Soba' className='ingredients' onClick={allergyClick}><img src={Soba} alt="Soba" /></label><br/>
                      <label htmlFor='Soba' className='ingredients' onClick={allergyClick}>そば</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="peanut" className='allergy_check'/>
                      <label htmlFor='peanut' className='ingredients' onClick={allergyClick}><img src={peanut} alt="peanut" /></label><br/>
                      <label htmlFor='peanut' className='ingredients' onClick={allergyClick}>落花生</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Abalone" className='allergy_check'/>
                      <label htmlFor='Abalone' className='ingredients' onClick={allergyClick}><img src={Abalone} alt="Abalone" /></label><br/>
                      <label htmlFor='Abalone' className='ingredients' onClick={allergyClick}>あわび</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="squid" className='allergy_check'/>
                      <label htmlFor='squid' className='ingredients' onClick={allergyClick}><img src={squid} alt="squid" /></label><br/>
                      <label htmlFor='squid' className='ingredients' onClick={allergyClick}>いか</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="ikura" className='allergy_check'/>
                      <label htmlFor='ikura' className='ingredients' onClick={allergyClick}><img src={ikura} alt="ikura" /></label><br/>
                      <label htmlFor='ikura' className='ingredients' onClick={allergyClick}>いくら</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Salmon" className='allergy_check'/>
                      <label htmlFor='Salmon' className='ingredients' onClick={allergyClick}><img src={Salmon} alt="Salmon" /></label><br/>
                      <label htmlFor='Salmon' className='ingredients' onClick={allergyClick}>さけ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="mackerel" className='allergy_check'/>
                      <label htmlFor='mackerel' className='ingredients' onClick={allergyClick}><img src={mackerel} alt="mackerel" /></label><br/>
                      <label htmlFor='mackerel' className='ingredients' onClick={allergyClick}>さば</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="almond" className='allergy_check'/>
                      <label htmlFor='almond' className='ingredients' onClick={allergyClick}><img src={almond} alt="almond" /></label><br/>
                      <label htmlFor='almond' className='ingredients' onClick={allergyClick}>アーモンド</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="orange" className='allergy_check'/>
                      <label htmlFor='orange' className='ingredients' onClick={allergyClick}><img src={orange} alt="orange" /></label><br/>
                      <label htmlFor='orange' className='ingredients' onClick={allergyClick}>オレンジ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="cashew_nuts" className='allergy_check'/>
                      <label htmlFor='cashew_nuts' className='ingredients' onClick={allergyClick}><img src={cashew_nuts} alt="cashew_nuts" /></label><br/>
                      <label htmlFor='cashew_nuts' className='ingredients' onClick={allergyClick}>カシューナッツ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="kiwi" className='allergy_check'/>
                      <label htmlFor='kiwi' className='ingredients' onClick={allergyClick}><img src={kiwi} alt="kiwi" /></label><br/>
                      <label htmlFor='kiwi' className='ingredients' onClick={allergyClick}>キウイ</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="beef" className='allergy_check'/>
                      <label htmlFor='beef' className='ingredients' onClick={allergyClick}><img src={beef} alt="beef" /></label><br/>
                      <label htmlFor='beef' className='ingredients' onClick={allergyClick}>牛肉</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="walnut" className='allergy_check'/>
                      <label htmlFor='walnut' className='ingredients' onClick={allergyClick}><img src={walnut} alt="walnut" /></label><br/>
                      <label htmlFor='walnut' className='ingredients' onClick={allergyClick}>クルミ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Gum" className='allergy_check'/>
                      <label htmlFor='Gum' className='ingredients' onClick={allergyClick}><img src={Gum} alt="Gum" /></label><br/>
                      <label htmlFor='Gum' className='ingredients' onClick={allergyClick}>ゴマ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="soy" className='allergy_check'/>
                      <label htmlFor='soy' className='ingredients' onClick={allergyClick}><img src={soy} alt="soy" /></label><br/>
                      <label htmlFor='soy' className='ingredients' onClick={allergyClick}>大豆</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="chicken_meat" className='allergy_check'/>
                      <label htmlFor='chicken_meat' className='ingredients' onClick={allergyClick}><img src={chicken_meat} alt="chicken_meat" /></label><br/>
                      <label htmlFor='chicken_meat' className='ingredients' onClick={allergyClick}>鶏肉</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="banana" className='allergy_check'/>
                      <label htmlFor='banana' className='ingredients' onClick={allergyClick}><img src={banana} alt="banana" /></label><br/>
                      <label htmlFor='banana' className='ingredients' onClick={allergyClick}>バナナ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="pork" className='allergy_check'/>
                      <label htmlFor='pork' className='ingredients' onClick={allergyClick}><img src={pork} alt="pork" /></label><br/>
                      <label htmlFor='pork' className='ingredients' onClick={allergyClick}>豚肉</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Matsutake" className='allergy_check'/>
                      <label htmlFor='Matsutake' className='ingredients' onClick={allergyClick}><img src={Matsutake} alt="Matsutake" /></label><br/>
                      <label htmlFor='Matsutake' className='ingredients' onClick={allergyClick}>まつたけ</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="kiwi" className='allergy_check'/>
                      <label htmlFor='kiwi' className='ingredients' onClick={allergyClick}><img src={kiwi} alt="kiwi" /></label><br/>
                      <label htmlFor='kiwi' className='ingredients' onClick={allergyClick}>キウイ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Peaches" className='allergy_check'/>
                      <label htmlFor='Peaches' className='ingredients' onClick={allergyClick}><img src={Peaches} alt="Peaches" /></label><br/>
                      <label htmlFor='Peaches' className='ingredients' onClick={allergyClick}>もも</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Yamaimo" className='allergy_check'/>
                      <label htmlFor='Yamaimo' className='ingredients' onClick={allergyClick}><img src={Yamaimo} alt="Yamaimo" /></label><br/>
                      <label htmlFor='Yamaimo' className='ingredients' onClick={allergyClick}>やまいも</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="apple" className='allergy_check'/>
                      <label htmlFor='apple' className='ingredients' onClick={allergyClick}><img src={apple} alt="apple" /></label><br/>
                      <label htmlFor='apple' className='ingredients' onClick={allergyClick}>りんご</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='btn_area'>
                <button className='btn_in' onClick={inputAllergy}>登録</button> 
              </div>
            </div>
          </div>
          <div className='allergy_look'></div>
        </div>
        <div className='food_label'>
          <label htmlFor='pop-up' className='lab_name open'>オプション</label><br/>
          <label htmlFor='pop-up' className='lab_pop open' onClick={SizeClick}>サイズ追加</label>
          <input type="checkbox" id="pop-up"/>
          <div className='overlay'>
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
      <StoreFooter />
    </div>
  );
}

export default FoodRegistration;
