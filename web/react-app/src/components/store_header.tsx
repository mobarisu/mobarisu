import React from 'react';
import logo from './image/logo.png';

const StoreHeader: React.FC = () =>{
    return (
        <header className='header_ac_on'>
        <div className="header-logo">
          <a href="#"><img src={logo} className="logo" alt=''/></a>
        </div>
      </header>
    );
};

export default StoreHeader;