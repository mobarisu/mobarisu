import React from 'react';
import { useNavigate } from "react-router-dom";
import './css/App.css';

function FoodChange() {

    // Line削除
    const DeleteLine = () =>{
      var sizeLine = document.getElementsByClassName("size_line");
      var cnt = sizeLine.length;
      if(cnt-1 >= 1){
        var test = document.querySelector(".size_batu");
        var next = test?.nextElementSibling;
        var nextnext = next?.nextElementSibling;
        var parent = test?.parentElement;
        test?.remove();
        next?.remove();
        nextnext?.remove();
        parent?.remove();
      }
      if(cnt-1 == 1){
        var line = document.getElementsByClassName("size_line")[0];
        var target = document.getElementsByClassName("size_batu");
        var pop = document.getElementsByClassName("pop_txt")[0];
        target[0].remove();
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
  
  return (
    <div>
      <header>
        <h1>商品変更</h1>
      </header>
      <main>
        <form action="">
          <div className='food_label'>
            <label htmlFor="name" className='lab_name'>商品名</label><br/>
            <input type="text" id="name" required/>
          </div>
          <div className='food_label'>
            <label htmlFor="number" className='lab_name'>値段</label><br/>
            <input type="number" id="number" required/>
          </div>
          <div className='food_label'>
            <label htmlFor='kubun' className='lab_name'>区分</label><br/>
            <select name='kubun'>
              <option value="メイン" label="メイン" selected></option>
              <option value="サイド" label="サイド"></option>
              <option value="ドリンク" label="ドリンク"></option>
            </select>
          </div>
          <div className='food_label'>
            <label htmlFor="foodExplanation" className='lab_name'>説明</label><br/>
            <textarea id="foodExplanation"/>
          </div>
          <div className='food_label'>
            <label htmlFor="allergy" className='lab_name'>アレルギー項目</label><br/>
            <label htmlFor="allergy" className='lab_pop'>アレルギー変更</label>
            <input type="file" id="allergy"/>
          </div>
          <div className='food_label'>
            <label htmlFor='pop-up' className='lab_name'>オプション</label><br/>
            <label htmlFor='pop-up' className='lab_pop'>サイズ変更</label>
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
                    <a href="javascript:void(0);" onClick={DeleteLine} className='size_batu'>×</a>
                    <input className='pop_txt' type="text"/>
                    <input className='pop_txt' type="number"/><p className='en'>円</p>
                  </div>
                  <div className='size_line'>
                    <a href="javascript:void(0);" onClick={DeleteLine} className='size_batu'>×</a>
                    <input className='pop_txt' type="text"/>
                    <input className='pop_txt' type="number"/><p className='en'>円</p>
                  </div>
                </div>
                <div className='line_plus'>
                  <a href="javascript:void(0);" onClick={addLine} className='line_in'>＋サイズを追加</a>
                </div>
                <div className='btn_area'>
                  <button className='btn_in'>変更</button> 
                </div>
              </div>
            </div>
          </div>
          <div className='food_label'>
            <label htmlFor="img" className='lab_name'>商品画像</label><br/>
            <label htmlFor="img" className='lab_pop'>商品画像変更</label>
            <input type="file" id="img"/>
          </div>
          <div className='btn_div food_label'>
            <input type="submit" onClick={()=> navigate('/store_food_list')} value={"変更"}/>
          </div>
        </form>
      </main>

    </div>
  );
}

export default FoodChange;
