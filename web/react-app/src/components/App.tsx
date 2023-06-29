
import React from 'react';

import { useNavigate } from "react-router-dom";

const App: React.FC = () => {

    const navigate = useNavigate();

    return (

        <div>

            <h1>App</h1>

            <div className="cart">

        <button className="btn_cart" onClick={() => navigate("/food_list")}>買い物を続ける</button>

        <input type="checkbox" id="pop-up"/>

            <div className="overlay">

      </div>

        </div>

        </div>

    );

};




export default App;