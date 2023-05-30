import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>店舗情報変更</h1>
      </header>
      <main>
        <form action="">
          <div>
            <label htmlFor="name" className='lab_name'>店舗名</label><br/>
            <input type="text" id="name" required/>
          </div>
          <div>
            <label htmlFor="name2" className='lab_name'>店主名</label><br/>
            <input type="text" id="name2" required/>
          </div>
          <div>
            <label htmlFor="img" className='lab_name'>写真登録</label><br/>
            <label htmlFor='img' className='lab_pop'>写真選択</label>
            <input type="file" id="img"/>
          </div>
          <div>
            <label htmlFor="Introduction" className='lab_name'>店舗紹介文</label><br/>
            <textarea id="Introduction"/>
          </div>
          <div className='btn_div'>
            <input type="submit" value={"変更"}/>
          </div>
        </form>
      </main>

    </div>
  );
}

export default App;
