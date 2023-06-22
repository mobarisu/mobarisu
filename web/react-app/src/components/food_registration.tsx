import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './css/App.css';
import egg from "./image/egg.svg";
import milk from "./image/milk.svg";
import wheat from "./image/wheat.svg";
import Shrimp from "./image/shrimp.svg";
import Crab from "./image/crab.svg";
import Soba from "./image/soba.svg";
import peanut from "./image/peanut.svg";
import Abalone from "./image/abalone.svg";
import squid from "./image/squid.svg";
import ikura from "./image/salmon_roe.svg";
import Salmon from "./image/salmon.svg";
import mackerel from "./image/mackerel.svg";
import gelatine from "./image/gelatine.svg";
import almond from "./image/almond.svg";
import orange from "./image/orange.svg";
import cashew_nuts from "./image/cashew_nuts.svg";
import kiwi from "./image/kiwi_fruit.svg";
import beef from "./image/beef.svg";
import walnut from "./image/walnut.svg";
import Gum from "./image/sesame.svg";
import soy from "./image/soy.svg";
import chicken_meat from "./image/chicken.svg";
import banana from "./image/banana.svg";
import pork from "./image/pork.svg";
import Matsutake from "./image/matsutake.svg";
import Peaches from "./image/peach.svg";
import Yamaimo from "./image/yam.svg";
import apple from "./image/apple.svg";
import {StoreHeader,StoreFooter} from './header_footer';

function FoodRegistration() {
  const navigate = useNavigate();

  // 保存されたアレルギーの選択状態を保持する
  var allergy_Save_List:{[key: string]: any}={};
  var allergy_Save_List_key = Object.keys(allergy_Save_List);
  var allergy_Save_List_values = Object.values(allergy_Save_List);
  var allergy_Save_List_length = Object.keys(allergy_Save_List).length;

  var allergy_Image_All: {[key: string]: any;}={};
  var allergy_Image_All_key = Object.keys(allergy_Image_All);
  var allergy_Image_All_values = Object.values(allergy_Image_All);
  var allergy_Image_All_length = Object.keys(allergy_Image_All).length;

  // ポップアップの×と登録ボタンにクリックイベントを付与(最初の２行分のみ)
  const PopClick = (e:any) =>{
    var target = e.target;
    var parent = target.parentNode;
    var overlay = parent.children[4];
    var window = overlay.children[0];
    var close = window.children[0].children[0];
    checkOnOff(target);
    if(target.htmlFor == "allergy"){
      var allergyCkBox = document.getElementsByClassName("allergy_check");
      var allergyLength = allergyCkBox.length;
      var ckId;
      if(allergy_Save_List_length == 0){
        // 一番最初のみ実行される
        for(let i=0; i<allergyLength; i++){
          ckId = allergyCkBox[i].id;
          allergy_Save_List[ckId] = false;
        }
      }
      allergy_Save_List_key = Object.keys(allergy_Save_List);
      allergy_Save_List_values = Object.values(allergy_Save_List);
      allergy_Save_List_length = Object.keys(allergy_Save_List).length;
      AllergyListLink();
    }

    close.addEventListener('click',function(){
      checkOnOff(target);
    });
  }

  // アレルギーのチェックボックスのtrue or falseをallergy_Save_Listをに合わせる
  const AllergyListLink = () =>{
    var allergyCkBox = document.getElementsByClassName("allergy_check");
    var allergyLength = allergyCkBox.length;
    var ckId;
    var ckValue;
    for(var x=0; x<allergyLength; x++){
      ckValue = allergyCkBox[x] as HTMLInputElement;
      ckId = ckValue.id;
      for(var y=0; y<allergy_Save_List_length; y++){
        if(ckId == allergy_Save_List_key[y]){
          ckValue.checked = allergy_Save_List_values[y];
          var area = ckValue.closest( ".allergy_ingredients" );
          allergyBackColorChange(ckValue.checked,area);
        }
      }
    }
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

  // // 連想配列の生成、初期値の設定
  // var inputList : {name:'',number:0, select: 'main', textarea:''};
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
    var name_error_none = document.getElementsByClassName("name_error_none")[0] as HTMLInputElement;
    var name_error_length = document.getElementsByClassName("name_error_length")[0] as HTMLInputElement;
    if(value.length !== 0){
      name_error_none.style.display = "none";
    }else{
      name_error_none.style.display = "block";
    }
    if(value.length < 129){
      name_error_length.style.display = "none";
    }else{
      name_error_length.style.display = "block";
    }
  }
  const numberValidation = (value: number): void => {
    var price_error_none = document.getElementsByClassName("price_error_none")[0] as HTMLInputElement;
    var price_error_type = document.getElementsByClassName("price_error_type")[0] as HTMLInputElement;
    price_error_none.style.display = "none";
    price_error_type.style.display = "none";
    
    var priceCK=[];
    priceCK=String(value).split('');
    if(priceCK[0] === "0"){
      price_error_none.style.display = "block";
    }else{
      price_error_none.style.display = "none";
    }
    var ck;
    for(var i=0; i<priceCK.length; i++){
      ck = Number(priceCK[i]);
      if(!(ck === 0 || ck === 1 || ck === 2 || ck === 3 || ck === 4 || ck === 5 || ck === 6 || ck === 7 || ck === 8 || ck === 9)){
        console.log('ng');
        price_error_type.style.display = "block";
        break;
      }
    }

  }
  const selectValidation = (value: string): void => {
    // console.log(value)
  } 
  const textareaValidation = (value: string): void => {
    var textarea_error_length = document.getElementsByClassName("textarea_error_length")[0] as HTMLInputElement;
    if(value.length < 256){
      textarea_error_length.style.display = "none";
    }else{
      textarea_error_length.style.display = "block";
    }

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

  const nowList = () =>{
    var allergyList: {[key: string]: any;}={};
    var allergycheck = document.getElementsByClassName("allergy_check");
    var allergy_id;
    var ck;
    for(var x=0; x<allergycheck.length; x++){
      allergy_id = allergycheck[x].id;
      ck = allergycheck[x] as HTMLInputElement
      allergyList[allergy_id] = ck.checked;
    }
    return allergyList;//今の選択状態を記録した連想配列を返す
  }

  const allergy_Change_chancel = () =>{
    // アレルギーのポップアップの×ボタンのクリックイベント
    if(!(allergy_Save_List_length == 0)){
      AllergyListLink();
    }
  }

  const allergyClick = (e:any) =>{
    // アレルギー項目のクリックイベント
    var target = e.target;
    var area = target.closest( ".allergy_ingredients" );
    var check = area.children[0];
    var checked = check.checked;
    if(checked == true){
      checked = false;
    }else{
      checked = true;
    }
    // 背景色を変える
    allergyBackColorChange(checked,area);
  }
  // アレルギーのtrue,falseに合わせて背景色を変える
  const allergyBackColorChange = (check:any, area:any) =>{
    if(check == true){
      area.style.background = "#f0f8ff";
    }else{
      area.style.background = "#ffffff";
    }
  }

  const inputAllergy = (e:any) => {
    // アレルギーのポップアップの登録のクリックイベント
    var target = e.target;
    var btnArea = target.parentNode;
    var window = btnArea.parentNode;
    var overlay = window.parentNode;
    var ckbox = document.getElementById("allergy") as HTMLInputElement;
    if(ckbox.checked == false){
      // 表示する
      overlay.style.display = "block";
      window.style.display = "block";
    }else{
      // 非表示にする
      overlay.style.display = "none";
      window.style.display = "none";

      // 現在のチェックボックスのチェック状態を取得
      var now = nowList();
      // 現在の状態を保存する
      allergy_Save_List = now;
      allergy_Save_List_key = Object.keys(allergy_Save_List);
      allergy_Save_List_values = Object.values(allergy_Save_List);
      allergy_Save_List_length = Object.keys(allergy_Save_List).length;

      // チェックボックスがtrueのものだけ抽出
      var allergyTrueList: {[key: string]: any;}={};
      var key;
      for(var x=0; x<allergy_Save_List_length;x++){
        if(allergy_Save_List_values[x] == true){
          key = allergy_Save_List_key[x];
          allergyTrueList[key] = allergy_Save_List_values[x];
        }
      }

      // アレルギー画像一覧の連想配列を作成
      var allergyAll: {[key: number]: any;}={};//アレルギー画像一覧
      var allergyimg = document.getElementsByClassName("allergy_img");
      for(var im=0; im<allergyimg.length; im++){
        allergyAll[im] = allergyimg[im];
      }
      var imageLength = Object.keys(allergyAll).length;
      var imgAlt;
      for(var i=0; i<imageLength; i++){
        imgAlt = allergyAll[i].alt;
        allergy_Image_All[imgAlt] = allergyAll[i];
      }
      allergy_Image_All_key = Object.keys(allergy_Image_All);
      allergy_Image_All_values = Object.values(allergy_Image_All);
      allergy_Image_All_length = Object.keys(allergy_Image_All).length;
    
      // allergy_look内の要素をクリア
      var lookarea = document.getElementsByClassName("allergy_look")[0];
      var area = lookarea.children;
      if(!(area.length == 0)){
        for(var x=area.length-1; x>=0; x--){
          area[x].remove();
        }
      }
      var allergyTrueList_key = Object.keys(allergyTrueList);
      var allergyTrueList_length = Object.keys(allergyTrueList).length;
      // allergy_lookに選択した項目の画像を表示
      var line = document.createElement("pre");
      var cloneImg;
      for(var v=0; v<allergyTrueList_length; v++){
        for(var b=0; b<allergy_Image_All_length; b++){
          if(allergyTrueList_key[v] == allergy_Image_All_key[b]){
            cloneImg = allergy_Image_All_values[b].cloneNode(true);
            line.className="alle_list";
            line.appendChild(cloneImg);
            lookarea.appendChild(line);
          }
        }
      }
    }
  }
  const clickSubmit = () => {
    // 一番下の登録ボタン
    console.log(values);
    var name_error_none = document.getElementsByClassName("name_error_none")[0] as HTMLInputElement;
    var name_error_length = document.getElementsByClassName("name_error_length")[0] as HTMLInputElement;
    var name_ck = length_area_check(values["name"].length,1,128);
    var price_error_none = document.getElementsByClassName("price_error_none")[0] as HTMLInputElement;
    var price_error_type = document.getElementsByClassName("price_error_type")[0] as HTMLInputElement;
    var textarea_error_length = document.getElementsByClassName("textarea_error_length")[0] as HTMLInputElement;

    // エラーメッセージ非表示
    if(name_ck == true){
      name_error_none.style.display = "none";
      name_error_length.style.display = "none";
    }
    if(values["number"].length >= 0 && (typeof Number(values["number"])) == "number"){
      price_error_none.style.display = "none";
      price_error_type.style.display = "none";
    }
    if(values["textarea"].length < 256){
      textarea_error_length.style.display = "none";
    }

    if(name_ck == true && values["number"].length >= 0 && values["textarea"].length < 256){
      console.log("ok");
      // window.location.href = "/store_food_list";// 画面遷移
    }

    // エラーメッセージ表示
    if(name_ck == "min"){
      name_error_none.style.display = "block";
      name_error_length.style.display = "block";
    }
    if(name_ck == "max"){
      name_error_length.style.display = "block";
    }
    if(values["number"].length == 0){
      price_error_none.style.display = "block";
    }
    if((typeof Number(values["number"])) != "number"){
      price_error_type.style.display = "block";
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
          <label htmlFor="name" className='lab_name'>商品名</label><br/>
          <input type="text" id="name" className="data_in" onChange={handleChange('name')} value={values.name} required/>
          <div className='input_error'>
            <p className='name_error_none'>※必須入力です。</p>
            <p className='name_error_length'>※文字数が正しくありません。</p>
          </div>
        </div>
        <div className='food_label'>
          <label htmlFor="number" className='lab_name'>値段</label><br/>
          <input type="number" id="number" className="data_in" onChange={handleChange('number')} value={values.number} required/>
          <div className='input_error'>
            <p className='price_error_none'>※必須入力です。</p>
            <p className='price_error_type'>※数値のみ入力してください。</p>
          </div>
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
          <div className='input_error'>
            <p className='textarea_error_length'>※文字数が正しくありません。</p>
          </div>
        </div>
        <div className='food_label'>
          <label htmlFor="allergy" className='lab_name open'>アレルギー項目</label><br/>
          <label htmlFor="allergy" className='lab_pop open' onClick={PopClick}>アレルギー追加</label>
          <input type="checkbox" id="allergy"/>
          <div className='overlay'>
            <div className="window">
              <div className='pop_batu'>
                <label className="close" htmlFor="allergy" onClick={allergy_Change_chancel}>×</label>
              </div>
              <div className='area_test'>
                <div className='allergy_list'>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="egg" className='allergy_check'/>
                      <label htmlFor='egg' className='ingredients' onClick={allergyClick}><img src={egg} alt="egg" className='allergy_img' /></label><br/>
                      <label htmlFor='egg' className='ingredients' onClick={allergyClick}>たまご</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="milk" className='allergy_check'/>
                      <label htmlFor='milk' className='ingredients' onClick={allergyClick}><img src={milk} alt="milk" className='allergy_img' /></label><br/>
                      <label htmlFor='milk' className='ingredients' onClick={allergyClick}>牛乳</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="wheat" className='allergy_check'/>
                      <label htmlFor='wheat' className='ingredients' onClick={allergyClick}><img src={wheat} alt="wheat" className='allergy_img' /></label><br/>
                      <label htmlFor='wheat' className='ingredients' onClick={allergyClick}>小麦</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Shrimp" className='allergy_check'/>
                      <label htmlFor='Shrimp' className='ingredients' onClick={allergyClick}><img src={Shrimp} alt="Shrimp" className='allergy_img' /></label><br/>
                      <label htmlFor='Shrimp' className='ingredients' onClick={allergyClick}>えび</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Crab" className='allergy_check'/>
                      <label htmlFor='Crab' className='ingredients' onClick={allergyClick}><img src={Crab} alt="Crab" className='allergy_img' /></label><br/>
                      <label htmlFor='Crab' className='ingredients' onClick={allergyClick}>かに</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Soba" className='allergy_check'/>
                      <label htmlFor='Soba' className='ingredients' onClick={allergyClick}><img src={Soba} alt="Soba" className='allergy_img' /></label><br/>
                      <label htmlFor='Soba' className='ingredients' onClick={allergyClick}>そば</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="peanut" className='allergy_check'/>
                      <label htmlFor='peanut' className='ingredients' onClick={allergyClick}><img src={peanut} alt="peanut" className='allergy_img' /></label><br/>
                      <label htmlFor='peanut' className='ingredients' onClick={allergyClick}>落花生</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Abalone" className='allergy_check'/>
                      <label htmlFor='Abalone' className='ingredients' onClick={allergyClick}><img src={Abalone} alt="Abalone" className='allergy_img' /></label><br/>
                      <label htmlFor='Abalone' className='ingredients' onClick={allergyClick}>あわび</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="squid" className='allergy_check'/>
                      <label htmlFor='squid' className='ingredients' onClick={allergyClick}><img src={squid} alt="squid" className='allergy_img' /></label><br/>
                      <label htmlFor='squid' className='ingredients' onClick={allergyClick}>いか</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="ikura" className='allergy_check'/>
                      <label htmlFor='ikura' className='ingredients' onClick={allergyClick}><img src={ikura} alt="ikura" className='allergy_img' /></label><br/>
                      <label htmlFor='ikura' className='ingredients' onClick={allergyClick}>いくら</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Salmon" className='allergy_check'/>
                      <label htmlFor='Salmon' className='ingredients' onClick={allergyClick}><img src={Salmon} alt="Salmon" className='allergy_img' /></label><br/>
                      <label htmlFor='Salmon' className='ingredients' onClick={allergyClick}>さけ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="mackerel" className='allergy_check'/>
                      <label htmlFor='mackerel' className='ingredients' onClick={allergyClick}><img src={mackerel} alt="mackerel" className='allergy_img' /></label><br/>
                      <label htmlFor='mackerel' className='ingredients' onClick={allergyClick}>さば</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="almond" className='allergy_check'/>
                      <label htmlFor='almond' className='ingredients' onClick={allergyClick}><img src={almond} alt="almond" className='allergy_img' /></label><br/>
                      <label htmlFor='almond' className='ingredients' onClick={allergyClick}>アーモンド</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="orange" className='allergy_check'/>
                      <label htmlFor='orange' className='ingredients' onClick={allergyClick}><img src={orange} alt="orange" className='allergy_img' /></label><br/>
                      <label htmlFor='orange' className='ingredients' onClick={allergyClick}>オレンジ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="cashew_nuts" className='allergy_check'/>
                      <label htmlFor='cashew_nuts' className='ingredients' onClick={allergyClick}><img src={cashew_nuts} alt="cashew_nuts" className='allergy_img' /></label><br/>
                      <label htmlFor='cashew_nuts' className='ingredients' onClick={allergyClick}>カシューナッツ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="kiwi" className='allergy_check'/>
                      <label htmlFor='kiwi' className='ingredients' onClick={allergyClick}><img src={kiwi} alt="kiwi" className='allergy_img' /></label><br/>
                      <label htmlFor='kiwi' className='ingredients' onClick={allergyClick}>キウイ</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="beef" className='allergy_check'/>
                      <label htmlFor='beef' className='ingredients' onClick={allergyClick}><img src={beef} alt="beef" className='allergy_img' /></label><br/>
                      <label htmlFor='beef' className='ingredients' onClick={allergyClick}>牛肉</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="walnut" className='allergy_check'/>
                      <label htmlFor='walnut' className='ingredients' onClick={allergyClick}><img src={walnut} alt="walnut" className='allergy_img' /></label><br/>
                      <label htmlFor='walnut' className='ingredients' onClick={allergyClick}>クルミ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Gum" className='allergy_check'/>
                      <label htmlFor='Gum' className='ingredients' onClick={allergyClick}><img src={Gum} alt="Gum" className='allergy_img' /></label><br/>
                      <label htmlFor='Gum' className='ingredients' onClick={allergyClick}>ゴマ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="soy" className='allergy_check'/>
                      <label htmlFor='soy' className='ingredients' onClick={allergyClick}><img src={soy} alt="soy" className='allergy_img' /></label><br/>
                      <label htmlFor='soy' className='ingredients' onClick={allergyClick}>大豆</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="chicken_meat" className='allergy_check'/>
                      <label htmlFor='chicken_meat' className='ingredients' onClick={allergyClick}><img src={chicken_meat} alt="chicken_meat" className='allergy_img' /></label><br/>
                      <label htmlFor='chicken_meat' className='ingredients' onClick={allergyClick}>鶏肉</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="banana" className='allergy_check'/>
                      <label htmlFor='banana' className='ingredients' onClick={allergyClick}><img src={banana} alt="banana" className='allergy_img' /></label><br/>
                      <label htmlFor='banana' className='ingredients' onClick={allergyClick}>バナナ</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="pork" className='allergy_check'/>
                      <label htmlFor='pork' className='ingredients' onClick={allergyClick}><img src={pork} alt="pork" className='allergy_img' /></label><br/>
                      <label htmlFor='pork' className='ingredients' onClick={allergyClick}>豚肉</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Matsutake" className='allergy_check'/>
                      <label htmlFor='Matsutake' className='ingredients' onClick={allergyClick}><img src={Matsutake} alt="Matsutake" className='allergy_img' /></label><br/>
                      <label htmlFor='Matsutake' className='ingredients' onClick={allergyClick}>まつたけ</label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="gelatine" className='allergy_check'/>
                      <label htmlFor='gelatine' className='ingredients' onClick={allergyClick}><img src={gelatine} alt="gelatine" className='allergy_img' /></label><br/>
                      <label htmlFor='gelatine' className='ingredients' onClick={allergyClick}>ゼラチン</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Peaches" className='allergy_check'/>
                      <label htmlFor='Peaches' className='ingredients' onClick={allergyClick}><img src={Peaches} alt="Peaches" className='allergy_img' /></label><br/>
                      <label htmlFor='Peaches' className='ingredients' onClick={allergyClick}>もも</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="Yamaimo" className='allergy_check'/>
                      <label htmlFor='Yamaimo' className='ingredients' onClick={allergyClick}><img src={Yamaimo} alt="Yamaimo" className='allergy_img' /></label><br/>
                      <label htmlFor='Yamaimo' className='ingredients' onClick={allergyClick}>やまいも</label>
                    </div>
                    <div className='allergy_ingredients'>
                      <input type="checkbox" id="apple" className='allergy_check'/>
                      <label htmlFor='apple' className='ingredients' onClick={allergyClick}><img src={apple} alt="apple" className='allergy_img' /></label><br/>
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
          <label htmlFor='pop-up' className='lab_pop open' onClick={PopClick}>サイズ追加</label>
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
