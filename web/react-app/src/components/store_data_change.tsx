import React from 'react';
import './css/App.css';

function StoreDataChange() {

  const backPage = () =>{
    var btn = document.getElementById("bt_back");
    btn?.addEventListener('click',function(){
      history.back();
    });
  }

  
  return (
    <div>
      <header>
        <h1>店舗情報変更</h1>
      </header>
      <main>
        <form action="">
          <div className='food_label'>
            <label htmlFor="name" className='lab_name'>店舗名</label><br/>
            <input type="text" id="name" required/>
          </div>
          <div className='food_label'>
            <label htmlFor="name2" className='lab_name'>店主名</label><br/>
            <input type="text" id="name2" required/>
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
            <textarea id="Introduction"/>
          </div>
          <div className='btn_div'>
            <input type="submit" id="bt_back" onClick={backPage} value={"変更"}/>
          </div>
        </form>
      </main>

    </div>
  );
}

export default StoreDataChange;
