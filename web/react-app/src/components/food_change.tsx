import React from 'react';
import './css/App.css';

function FoodChange() {
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
                <div className='test_batu'>
                  <label className="close" htmlFor="pop-up">×</label>
                </div>
                <div className='test_label'>
                  <label>サイズ</label>
                  <label>値段</label>
                </div>
                <div className='size_line'>
                  <label className='size_batu'>×</label>
                  <input className='pop_txt' type="text"/>
                  <input className='pop_txt' type="number"/>
                </div>
                <div className='size_line'>
                  <label className='size_batu'>×</label>
                  <input className='pop_txt' type="text"/>
                  <input className='pop_txt' type="number"/>
                </div>
                <div className='line_plus'>
                  <label className='line_in'>＋サイズを追加</label>
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
            <input type="submit" value={"変更"}/>
          </div>
        </form>
      </main>

    </div>
  );
}

export default FoodChange;
